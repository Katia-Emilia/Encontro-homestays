"use client";

import { useEffect, useState, useCallback } from "react";

import {fetchPageData } from "@/src/superbase/FetchPageData";
import { FetchHeroImg } from "@/src/superbase/FetchHeroImg";
import { FetchGalleryImg } from "@/src/superbase/FetchGalleryImg";


// ---------- Admin allowlist ----------
export const ADMIN_EMAILS = ["admin@encontro.com"];
export const DEMO_PASSWORD = "admin123"; // demo only — frontend mock

// ---------- Types ----------
export type HeroSlide = { src: string; alt: string };
export type GalleryImage = { src: string; alt: string };

export type SiteContent = {
  hero: {
    title: string;
    subtitle: string;
    slides: HeroSlide[];
  };
  about: {
    title: string;
    description: string[];
  };
  rooms:{
    title: string;
    description: string;
  };
  gallery: GalleryImage[];
};

export type BookingStatus = "pending" | "confirmed" | "rejected";
export type Booking = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  guests: string;
  arrival: string;   // ISO
  departure: string; // ISO
  message?: string;
  createdAt: string; // ISO
  status: BookingStatus;
};

// ---------- Defaults ----------

const heroImages = await FetchHeroImg();

const hero_slides = (heroImages ?? []).map((img) => ({
    src: img.image_url,
    alt: img.alt_text,
  }));

const data = await fetchPageData();
const hero_title= data[0].hero_title? data[0].hero_title: "No data found";
const hero_description = data?.[0]?.hero_subtitle? data[0].hero_subtitle: "No data found";

const about_title= data[0].about_title? data[0].about_title: "No data found";
const about_description = data?.[0]?.about_description? data[0].about_description: "No data found";

const room_title = data[0].amenities_title? data[0].amenities_title: "No data found";
const room_description = data?.[0]?.amenities_description? data[0].amenities_description: "No data found";

const galleryImages = await FetchGalleryImg();

const gallery_slides = (galleryImages ?? []).map((img) => ({
    src: img.image_url,
    alt: img.alt_text,
  }));


const DEFAULT_CONTENT: SiteContent = {
  hero: {
    title: hero_title,
    subtitle: hero_description,
    slides: hero_slides,
  },
  about: {
    title: about_title,
    description: about_description,
  },
  rooms: {
    title: room_title,
    description: room_description,
  },
  gallery: gallery_slides,
};

// ---------- Storage keys ----------
const K_CONTENT  = "encontro:content:v1";
const K_BOOKINGS = "encontro:bookings:v1";
const K_AUTH     = "encontro:auth:v1";
const K_VIEWS    = "encontro:views:v1";

// ---------- Generic storage helpers ----------
function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(`store:${key}`));
}

function useStore<T>(
  key: string,
  fallback: T,
): [T, (v: T | ((p: T) => T)) => void] {
  const [state, setState] = useState<T>(fallback);

  useEffect(() => {
    setState(read<T>(key, fallback));
    const onChange = () => setState(read<T>(key, fallback));
    window.addEventListener(`store:${key}`, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(`store:${key}`, onChange);
      window.removeEventListener("storage", onChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setter = useCallback(
    (v: T | ((p: T) => T)) => {
      setState((prev) => {
        const next = typeof v === "function" ? (v as (p: T) => T)(prev) : v;
        write(key, next);
        return next;
      });
    },
    [key],
  );

  return [state, setter];
}

// ---------- Content ----------
export function useSiteContent() {
  return useStore<SiteContent>(K_CONTENT, DEFAULT_CONTENT);
}

export function resetSiteContent() {
  write(K_CONTENT, DEFAULT_CONTENT);
}

// ---------- Bookings ----------
export function useBookings() {
  return useStore<Booking[]>(K_BOOKINGS, []);
}

export function addBooking(b: Omit<Booking, "id" | "createdAt" | "status">) {
  const list = read<Booking[]>(K_BOOKINGS, []);
  const booking: Booking = {
    ...b,
    id: `bk_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
    status: "pending",
  };
  write(K_BOOKINGS, [booking, ...list]);
  return booking;
}

export function updateBookingStatus(id: string, status: BookingStatus) {
  const list = read<Booking[]>(K_BOOKINGS, []);
  write(
    K_BOOKINGS,
    list.map((b) => (b.id === id ? { ...b, status } : b)),
  );
}

export function deleteBooking(id: string) {
  const list = read<Booking[]>(K_BOOKINGS, []);
  write(
    K_BOOKINGS,
    list.filter((b) => b.id !== id),
  );
}

// ---------- Auth ----------
type AuthState = { email: string | null };

export function useAuth() {
  const [auth, setAuth] = useStore<AuthState>(K_AUTH, { email: null });
  const isAdmin =
    !!auth.email && ADMIN_EMAILS.includes(auth.email.toLowerCase());

  const login = (email: string, password: string) => {
    const e = email.trim().toLowerCase();
    if (!ADMIN_EMAILS.includes(e)) {
      return { ok: false, error: "Email not authorized." };
    }
    if (password !== DEMO_PASSWORD) {
      return { ok: false, error: "Incorrect password." };
    }
    setAuth({ email: e });
    return { ok: true };
  };

  const logout = () => setAuth({ email: null });

  return { auth, isAdmin, login, logout };
}

// ---------- Page views ----------
type Views = Record<string, number>;

export function trackView(path: string) {
  if (typeof window === "undefined") return;
  const v = read<Views>(K_VIEWS, {});
  v[path] = (v[path] || 0) + 1;
  v["__total"] = (v["__total"] || 0) + 1;
  const day = new Date().toISOString().slice(0, 10);
  v[`day:${day}`] = (v[`day:${day}`] || 0) + 1;
  write(K_VIEWS, v);
}

export function useViews() {
  return useStore<Views>(K_VIEWS, {});
}

// ---------- File upload helper ----------
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
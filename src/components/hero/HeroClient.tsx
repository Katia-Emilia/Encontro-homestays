"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function HeroClient({
  slides,
  logo,
  // location,
  title,
  description,
}: {
  slides: { src: string; alt: string }[];
  logo: StaticImport;
  // location: string;
  title: string;
  description: string;
}) {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length]
  );

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-950">
      
      {/* Slides */}
      {slides.map((s: { src: string; alt: string }, i: number) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            className={`h-full w-full object-cover ${
              i === index ? "animate-ken-burns" : ""
            }`}
            width={1920}
            height={1080}
          />
        </div>
      ))}

      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-4 pt-4 sm:px-10 sm:pt-8">
        <div className="hidden sm:block w-28 lg:w-32" />

        <a href="#top" className="mx-auto flex flex-col items-center">
          <Image
            src={logo}
            alt="Encontro Homestays"
            className="h-40 w-auto sm:h-48 lg:h-56 "
          />
        </a>

        <a
          href="https://wa.link/9j8995"
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:inline-flex border border-white/70 bg-white/5 px-5 py-2.5 text-xs uppercase text-white backdrop-blur-md hover:bg-gold hover:text-cobalt"
        >
          Book Now
        </a>

      </div>

      <div className="relative z-10 m-10 flex h-full flex-col items-center justify-center text-center text-white px-6">        
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl max-w-4xl text-cream" >
          {title}
        </h1>

        <p className="mt-6 max-w-xl text-sm text-white/85 sm:text-base">
          {description}
        </p>

        
      </div>

      {/* Arrows */}
      <Button
        onClick={prev}
          variant="ghost"
         aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 text-white"
      >
        <ChevronLeft />
      </Button>

      <Button
        onClick={next}
          variant="ghost"
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 text-white"
      >
        <ChevronRight />
      </Button>

      
   {/* Dots */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
  {slides.map((_: unknown, i: number) => (
    <button
      type="button"
      key={i}
      onClick={() => setIndex(i)}
      aria-label={`Go to slide ${i + 1}`}
      className={`h-[2px] rounded-full transition-all duration-300 ${
        i === index ? "w-10 bg-gold" : "w-6 bg-white/50"
      }`}
    />
  ))}
</div>

    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type Slide = {
  src: any;
  alt: string;
};

export default function GalleryClient({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <div className="relative mt-16">
      {/* Image + Arrows scoped together */}
      <div className="relative aspect-[16/9] w-full">
        <div className="relative h-full w-full overflow-hidden shadow-2xl bg-stone-950">
          {slides.map((s, i) => (
            <Image
              key={i}
              src={s.src}
              alt={s.alt}
              fill
              loading={i === 0 ? "eager" : "lazy"}
              className={`object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="pointer-events-none absolute inset-0" />

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-cobalt/90 px-5 py-3 text-white">
            <p className="text-[10px] uppercase text-gold">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </p>
            <p className="font-display text-base sm:text-lg italic">
              {slides[index].alt}
            </p>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold text-cobalt shadow-md hover:bg-cobalt hover:text-gold"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold text-cobalt shadow-md hover:bg-cobalt hover:text-gold"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 grid grid-cols-5 gap-3 sm:gap-4">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`group relative aspect-[4/3] overflow-hidden ${
              i === index
                ? "ring-2 ring-gold ring-offset-2 ring-offset-background"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={s.src}
              alt=""
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
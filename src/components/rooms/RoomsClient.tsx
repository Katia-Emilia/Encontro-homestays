"use client";

import { useState } from "react";
import Image from "next/image";

import room from "@/src/assets/room-1.jpg";
import bunks from "@/src/assets/bunks.jpg";

const stayImages = [
  {
    src: room,
    alt: "Bedroom",
    label: "Beds",
  },
  {
    src: bunks,
    alt: "Bunk beds",
    label: "Bunks",
  },
];

export function RoomsClient() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="relative">
      <Image
        src={stayImages[selectedImage].src}
        alt={stayImages[selectedImage].alt}
        className="h-full w-full object-cover shadow-2xl transition-all duration-500"
        loading="lazy"
        width={1280}
        height={1280}
      />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 rounded-full bg-black/40 p-2 backdrop-blur-md">
        {stayImages.map((image, index) => (
          <button
            key={image.label}
            onClick={() => setSelectedImage(index)}
            className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
              selectedImage === index
                ? "bg-cobalt text-gold"
                : "bg-white/20 text-white hover:bg-white/40"
            }`}
          >
            {image.label}
          </button>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import GalleryClient from "./GalleryClient";
import { Waves, Palmtree, UtensilsCrossed, ShoppingBasket } from "lucide-react";
import { FetchGalleryImg } from "@/src/superbase/FetchGalleryImg";
import { FetchBeyondImg } from "@/src/superbase/FetchBeyondData";

import jettyImg from "@/src/assets/beyond-jetty.jpg";
import beachImg from "@/src/assets/beyond-beach.jpg";
import foodImg from "@/src/assets/beyond-food.jpg";
import marketImg from "@/src/assets/beyond-market.jpg";

const galleryImages = await FetchGalleryImg();
const beyondImages = await FetchBeyondImg();

const slides = (galleryImages ?? []).map((img) => ({
    src: img.image_url,
    alt: img.alt_text,
  }));

const beyondExperiences = (beyondImages ?? []).map((img) => ({
    img: img.image_url,
    title: img.title,
    dist: img.distance,
    description: img.description,
  }));


export function Gallery() {
  return (
    <div>
    <section id="gallery" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs tracking-luxe uppercase text-gold">
            Moments
          </p>
          <span className="mt-4 inline-block gold-divider" />
          <h2 className="mt-6 font-display text-4xl font-light text-cobalt sm:text-5xl md:text-6xl">
            Glimpses of Encontro
          </h2>
        </div>

        <GalleryClient slides={slides} />
      </div>
    </section>
    <section id="beyond" className="relative bg-cream/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="text-center">
          <p className="text-xs tracking-luxe uppercase text-gold">Beyond the House</p>
          <span className="mt-4 inline-block gold-divider" />
          <h2 className="mt-6 font-display text-4xl font-light text-cobalt sm:text-5xl md:text-6xl">
            A coastline of small wonders
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            Step beyond our gates and Goa unfolds slowly. A few of our quiet favourites.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-12">
          {beyondExperiences.map(({ img, title, dist, description }, i) => (
            <article key={title} className="group relative">
              <div className="relative overflow-hidden rounded-sm shadow-[0_20px_50px_-20px_rgba(15,38,77,0.35)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <span className="absolute left-4 top-4 font-display text-xs tracking-luxe text-cream/80 mix-blend-difference">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <p className="text-[10px] tracking-luxe uppercase text-gold">
                    {dist}
                  </p>
                </div>
                <h3 className="mt-3 font-display text-2xl font-light text-cobalt sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
</div>
  );
}
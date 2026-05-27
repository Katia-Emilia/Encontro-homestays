import { RoomsClient } from "./RoomsClient";
import room from "@/src/assets/room-1.jpg";
import bunks from "@/src/assets/bunks.jpg";
import Image from "next/image";
import {
  BedDouble,
  Snowflake,
  Wifi,
  ShowerHead,
  Car
} from "lucide-react";
import { fetchPageData } from "@/src/superbase/FetchPageData";

const features = [
  { icon: BedDouble, label: "Comfortable Beds" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: ShowerHead, label: "Hot Water" },
  { icon: Car, label: "Parking" },
];


const data = await fetchPageData();
const room_title = (<>{data?.[0]?.amenities_title? data[0].amenities_title: "No data found"}</>
);
const room_description = data?.[0]?.amenities_description? data[0].amenities_description: "No data found";

export function Rooms() {
  return (
    <section id="rooms" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="text-center">
          <p className="text-xs tracking-luxe uppercase text-gold">The Rooms</p>
          <span className="mt-4 inline-block gold-divider" />
          <h2 className="mt-6 font-display text-4xl font-light text-cobalt sm:text-5xl md:text-6xl">
            {room_title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            {room_description}
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2">
          <RoomsClient />
          {/* <div className="relative">
            <Image
              src={room}
              alt="Bedroom in Encontro Homestays"
              className="h-full w-full object-cover shadow-2xl"
              loading="lazy"
              width={1280}
              height={1280}
            />
          </div> */}

          {/* Luxurious features panel */}
          <div className="relative bg-gradient-to-br from-background via-background to-cream p-10 sm:p-14 shadow-2xl flex flex-col overflow-hidden border border-gold/20">
            {/* Gold corner ornaments */}

            <div className="text-center">
              
              <h3 className="mt-3 font-display text-3xl sm:text-4xl text-gold">
                Amenities
                </h3>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative">
                    {/* Outer ring */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-full border border-gold/30 transition-transform duration-500 group-hover:scale-110 group-hover:border-gold/70"
                    />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cobalt to-[oklch(0.22_0.18_270)] text-gold shadow-lg shadow-cobalt/20 transition-all duration-500 group-hover:shadow-gold/30">
                      <Icon className="h-7 w-7" strokeWidth={1.25} />
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] tracking-wider-soft uppercase text-cobalt/80 transition-colors group-hover:text-gold">
                    {label}
                  </p>
                </div>
              ))}
            </div>
{/* 
            <div className="mt-auto pt-12 text-center">
              <span className="block mx-auto gold-divider" />
              <p className="mt-6 text-[10px] tracking-luxe uppercase text-cobalt/60">
                Tariff
              </p> 
              <p className="mt-2 font-display text-3xl sm:text-4xl italic text-gold">
                ₹3,500 <span className="text-cobalt/70 not-italic text-2xl">/ night</span>
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center bg-cobalt px-12 py-4 text-xs tracking-luxe uppercase text-white transition hover:bg-gold hover:text-cobalt"
              >
                Check Availability
              </a>
            </div> */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

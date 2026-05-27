// hero/Hero.tsx
import logo from "@/src/assets/logo-main.png";
import HeroClient from "./HeroClient";
import {fetchPageData } from "@/src/superbase/FetchPageData";
import { FetchHeroImg } from "@/src/superbase/FetchHeroImg";

const heroImages = await FetchHeroImg();

const slides = (heroImages ?? []).map((img) => ({
    src: img.image_url,
    alt: img.alt_text,
  }));

const data = await fetchPageData();

const hero_title = data?.[0]?.hero_title? data[0].hero_title: "No data found";
const hero_description = data?.[0]?.hero_subtitle? data[0].hero_subtitle: "No data found";

export function Hero() {
  return (
    <>
    <HeroClient
      slides={slides}
      logo={logo}
      title={hero_title}      
      description={hero_description}
    />
</>

  );
}
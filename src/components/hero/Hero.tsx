// hero/Hero.tsx
import logo from "@/src/assets/logo/logo-main.png";
import HeroClient from "./HeroClient";
import heroData from "@/src/assets/page contents/hero.json";
import content from "@/src/assets/page contents/content.json";


const slides = heroData.map((img) => ({
    src: img.image_url,
    alt: img.alt_text,
  }));

const hero_title = content.hero_title? content.hero_title: "No data found";
const hero_description = content.hero_subtitle? content.hero_subtitle: "No data found";

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
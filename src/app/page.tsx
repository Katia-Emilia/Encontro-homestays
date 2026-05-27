
import { Header } from "@/src/components/header/Header";
import { Hero } from "@/src/components/hero/Hero";
import { About } from "@/src/components/about/About";
import { Rooms } from "@/src/components/rooms/Rooms";
import { Gallery } from "@/src/components/gallary/Gallery";
import { Footer } from "@/src/components/footer/Footer";

export default function Home() {
  return (
    <div id="top" className="bg-background">
      <Header /><Hero /><About /><Rooms /><Gallery /><Footer />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Link = {
  href: string;
  label: string;
};

type HeaderClientProps = {
  links: Link[];
  logo: any;
};

export default function HeaderClient({ links, logo }: HeaderClientProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.85);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-background/90 backdrop-blur-lg border-b border-border`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4">
        
        {/* Logo */}
        <a href="#top" className="flex items-center shrink-0">
          <Image
            src={logo}
            alt="Encontro"
            className="h-8 w-auto sm:h-10"
          />
        </a>

        {/* Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase text-cobalt/80 hover:text-gold transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.link/9j8995"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-cobalt px-4 py-2 text-[10px] uppercase text-white hover:bg-gold hover:text-cobalt sm:px-6 sm:py-3 sm:text-[11px]"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
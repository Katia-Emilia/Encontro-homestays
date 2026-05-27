import logoMark from "@/src/assets/logo-map.png";
import { fetchPageData } from "@/src/superbase/FetchPageData";
import Image from "next/image";

const data = await fetchPageData();
const about_title= (<>{data?.[0]?.about_title? data[0].about_title: "No data found"}</>
);
const about_description = data?.[0]?.about_description?? "No data found";

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 md:gap-14 lg:gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-luxe uppercase text-gold">Our Story</p>
            <span className="mt-4 block gold-divider" />
            <h2 className="mt-6 font-display text-4xl font-light text-cobalt sm:text-5xl md:text-6xl">
              {about_title}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
  {about_description.split("<br/>").map((line: string, i: number, arr: string[]) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))}
</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden bg-cream shadow-2xl">
              <iframe
                title="Encontro Homestays Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3845.5346054502966!2d73.80344699999999!3d15.455650000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDI3JzIwLjMiTiA3M8KwNDgnMTIuNCJF!5e0!3m2!1sen!2sin!4v1779745002459!5m2!1sen!2sin"
                className="h-72 w-full sm:h-96 md:h-112"
                loading="lazy"
              >
              </iframe>

              <div className="border-t border-border bg-background px-4 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Image src={logoMark} alt="" className="h-4 w-auto sm:h-6" />
                  <div>
                    <p className="font-display text-base sm:text-lg text-cobalt">Dona Paula</p>
                    <p className="text-xs text-muted-foreground">North Goa, India · 403004</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

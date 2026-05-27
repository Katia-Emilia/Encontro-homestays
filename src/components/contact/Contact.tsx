// contact/Contact.tsx
import ContactClient from "./ContactClient";

export function Contact() {
  return (
    <section id="contact" className="relative bg-cream py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-10">
        <div className="relative px-4 py-12 sm:px-10 sm:py-16 md:px-16 md:py-24">
          
          {/* Decorative corners */}
          <span className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-gold" />
          <span className="pointer-events-none absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-gold/30" />
          <span className="pointer-events-none absolute left-0 bottom-0 h-10 w-10 border-l-2 border-b-2 border-gold/30" />
          <span className="pointer-events-none absolute right-0 bottom-0 h-10 w-10 border-r-2 border-b-2 border-gold" />

          {/* Heading */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <span className="h-px w-10 bg-gold" />
              <p className="text-xs tracking-luxe uppercase text-gold">
                Reserve
              </p>
              <span className="h-px w-10 bg-gold" />
              <span className="h-px w-10 bg-gold" />
            </div>

            <h2 className="mt-6 font-display text-4xl font-light text-cobalt sm:text-5xl md:text-6xl">
              Plan Your Stay
            </h2>

            <p className="mt-4 text-base text-muted-foreground">
              Select your dates and we'll prepare a home for you.
            </p>
          </div>

          {/* Client Form */}
          <ContactClient />
        </div>
      </div>
    </section>
  );
}
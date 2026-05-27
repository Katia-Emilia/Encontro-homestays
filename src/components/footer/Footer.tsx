import logo from "@/src/assets/logo-name.png";//chnag this 
import Image from "next/image";

export function Footer() {
  return (
    <footer id="footer" className="bg-background border-t border-border py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <Image src={logo} alt="Encontro Homestays" className="h-30 w-auto sm:h-40" />
          {/* <p className="mt-5 max-w-md font-display text-base italic text-muted-foreground sm:mt-6 sm:text-lg">
            "Onde o mar encontra a alma."
          </p> */}
          <span className="mt-6 inline-block gold-divider" />
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3 text-center sm:text-left sm:mt-12">
          <div>
            <p className="text-[10px] tracking-luxe uppercase text-gold">Visit</p>
            <p className="mt-3 text-sm text-cobalt">
              Dona Paula, North Goa<br />India · 403004
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-luxe uppercase text-gold">Reach</p>
            <p className="mt-3 text-sm text-cobalt">
              +91 95610 98320<br />encontrohomestays@gmail.com
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-luxe uppercase text-gold">Follow us</p>
            <p className="mt-3 text-sm text-cobalt">
             <a href="https://www.instagram.com/encontrohomestays/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a> 
              <br />
              <a href="https://www.facebook.com/people/Encontro-Homestays/61590270936810/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

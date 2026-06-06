import "./globals.css";
import { Toaster } from "@/src/components/ui/sonner";

export const metadata = {
  metadataBase: new URL("https://encontrohomestays.com/"),
  title: "Encontro Homestays",
  description: "Where people & experiences come together", // fill this in properly
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Encontro Homestays",
    description: "Where people & experiences come together",
    images: ["/logo_socials.png"],   
    url: "https://encontrohomestays.com/",
    siteName: "Encontro Homestays",

  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

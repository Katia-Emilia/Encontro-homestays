// header/Header.tsx
import logoMark from "@/src/assets/logo-small.png";// change this
import HeaderClient from "./HeaderClient";

const links = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  
  // { href: "#reviews", label: "Reviews" },
  {href: "#beyond", label: "Beyond the house"},
  { href: "#footer", label: "Contact us" }, //contact id/folder etc is check availiblity
  
];

export function Header() {
  return <HeaderClient links={links} logo={logoMark} />;
}
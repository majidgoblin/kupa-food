import { TiHome } from "react-icons/ti";
import { IoDocumentText, IoPerson, IoCart } from "react-icons/io5";

export const navItems = [
  {
    id: "home",
    href: "/",
    label: "Home",
    icon: TiHome,
  },
  {
    id: "menu",
    href: "/menu",
    label: "Menu",
    icon: IoDocumentText,
  },
  {
    id: "cart",
    href: "/cart",
    label: "Cart",
    icon: IoCart,
  },
  {
    id: "profile",
    href: "/profile",
    label: "Profile",
    icon: IoPerson,
  },
];

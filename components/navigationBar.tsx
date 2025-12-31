"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/zustand/cart";
import clsx from "clsx";
import { navItems } from "@/consts/routes";

const NavigationBar = () => {
  const pathname = usePathname();
  const items = useCart((state) => state.items);

  const cartCount = items?.length ?? 0;

  return (
   <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-[412px] bg-white flex justify-around py-3">
      {navItems.map(({ id, href, label, icon: Icon }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={id}
            href={href}
            className={clsx(
              "flex flex-col items-center text-xs font-bold transition-colors",
              isActive ? "text-primary" : "text-gray-500"
            )}
          >
            <Icon size={26} className="" />
            {/* <span>
              {label}
              {id === "cart" && cartCount > 0 && ` (${cartCount})`}
            </span> */}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationBar;

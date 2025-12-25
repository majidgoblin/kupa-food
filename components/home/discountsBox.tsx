"use client";

import { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { FaBowlFood, FaBurger, FaMartiniGlassCitrus } from "react-icons/fa6";
import clsx from "clsx";

type Category = "all" | "pizza" | "burger" | "cafe";

const HomeDiscounts = () => {
  const [active, setActive] = useState<Category>("all");

  const items = [
    { id: "all", label: "All", icon: FaBowlFood },
    { id: "pizza", label: "Pizza", icon: FaPizzaSlice },
    { id: "burger", label: "Burger", icon: FaBurger },
    { id: "cafe", label: "Cafe", icon: FaMartiniGlassCitrus },
  ] as const;

  return (
    <ul className="flex items-center justify-between mt-8 px-6">
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;

        return (
          <li
            key={id}
            onClick={() => setActive(id)}
            className="flex flex-col items-center cursor-pointer select-none"
          >
            <div
              className={clsx(
                "rounded-xl p-4 transition-colors duration-200",
                isActive ? "bg-primary" : "bg-white"
              )}
            >
              <Icon
                size={28}
                className={clsx(
                  "transition-colors duration-200",
                  isActive ? "text-white" : "text-txt-secondary"
                )}
              />
            </div>

            <span
              className={clsx(
                "text-sm mt-1 transition-colors duration-200",
                isActive ? "text-primary" : "text-txt-secondary"
              )}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeDiscounts;

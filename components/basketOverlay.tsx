import { FC } from "react";
import { useBasket } from "@/zustand/basket";

export const BasketOverlay: FC = () => {
  const { status, close } = useBasket();

  if (!status) return null;

  return (
    <div
      onClick={close}
      className="
        fixed inset-0
        z-40
        bg-black/50
        backdrop-blur-[1px]
        transition-opacity
      "
    />
  );
};
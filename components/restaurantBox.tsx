import { IProduct } from "@/types/product";
import Image from "next/image";
import { FC } from "react";
import { FaRegClock, FaStar } from "react-icons/fa";

const RestaurantBox: FC<IProduct> = ({ id, image, price, name }) => {
  return (
    <div className="text-left" onClick={() => {}}>
      <Image
        alt="kupa"
        src={image}
        width={100}
        height={100}
        className="rounded-[15px] w-[120px] h-[120px] object-cover"
      />
      <span className="block text-[16px] font-normal text-txt-primary mt-1">
        {name}
      </span>
      <div className=" flex items-center justify-between">
        <div className="flex items-center">
          <FaStar size={12} className="text-yellow mr-1" />
          <span className="text-xs text-txt-primary font-medium">4.5</span>
        </div>
        <span className="text-lg text-txt-secondary">.</span>
        <div className="flex items-center text-txt-primary">
          <FaRegClock  size={12} className="mr-1 " />
          <span className="text-xs">25 min</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBox;

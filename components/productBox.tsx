import { FC } from "react";
import { IProduct } from "@/types/product";
import Image from "next/image";
import { useBasket } from "@/zustand/basket";
import { FaPlus } from "react-icons/fa";

const ProductBox: FC<IProduct> = ({ id, discount, image, price, name }) => {
  const open = useBasket((state) => state.open);
  const setProductId = useBasket((s) => s.productId);

  const handleClick = () => {
    setProductId(id);
    open();
  };

  return (
    <div
      className="bg-white w-full rounded-xl flex  items-center mb-5"
      onClick={handleClick}
    >
      <div className="relative">
        <Image
          alt="kupa"
          src={image}
          width={100}
          height={90}
          className="object-cover rounded-xl w-[100px] h-[90px]"
        />
        {!!discount && (
          <span
            className="absolute bottom-0 left-0 text-white 
          rounded-xl rounded-tl-none bg-primary
           bg-opacity-90 px-3 py-1 text-xs font-semibold"
          >
            {discount}% OFF
          </span>
        )}
      </div>
      <div className="px-4 py-3 flex flex-col flex-1">
        <span className="text-txt-primary text-sm">{name}</span>
        <span className="text-txt-secondary text-xs my-1">Minamino</span>
        <span className="text-txt-primary text-sm font-semibold">
          Price: ${price}
        </span>
      </div>
      <span className="float-right flex-shrink-0 mr-5">
        <FaPlus size={12} className="text-txt-secondary" />
      </span>
    </div>
  );
};

export default ProductBox;

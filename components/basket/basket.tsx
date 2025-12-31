import { IoMdClose, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import AmountButton from "../amountBtn";
import Image from "next/image";
import { useBasketLogic } from "./useBasket";
import { FC } from "react";
import { IBasket, IProduct } from "@/types/product";
import { formatPrice } from "@/consts/formatPrice";

interface IProps {
  products: IProduct[] | undefined;
}

export const Basket: FC<IProps> = ({ products }) => {
  const {
    basket,
    product,
    amount,
    totalPrice,
    like,
    increase,
    decrease,
    toggleLike,
    addToCart,
    close,
    handleTopping,
    handleSause,
  } = useBasketLogic(products);

  if (!product) return null;

  return (
    <div
      className={`
        fixed inset-x-0 mx-auto bottom-0 z-50
        w-full max-w-md h-[85svh]
        rounded-t-xl bg-white
        transition-transform duration-300
        overflow-y-auto
        overflow-x-hidden
        py-2
        px-3
        ${basket.status ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="mb-3" onClick={close}>
        <IoMdClose />
      </div>

      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-[300px] rounded-md object-cover"
      />

      <div className="flex justify-between mt-7">
        <div>
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-400 text-sm">{product.description}</p>
        </div>

        <div onClick={toggleLike}>
          {like ? <IoMdHeart className="text-red" /> : <IoMdHeartEmpty />}
        </div>
      </div>

      <AmountButton
        amount={amount}
        totalPrice={totalPrice}
        handleAdd={increase}
        handleDecrise={decrease}
      />

      <div className="border-b-2 border-solid pb-8">
        <span className="text-xl font-bold text-gray-700 block my-3">
          Sause
        </span>
        <div className="rounded-lg border-2 border-solid">
          <div className="p-2  border-b-2 border-solid">
            <input type="checkbox" onChange={(e) => handleSause(e)} />
            <span className="inline-block text-gray-700 font-bold ml-3">
              Barbeque
            </span>
            <span className="float-right   text-gray-700 font-bold ">$2</span>
          </div>
          <div className="p-2  ">
            <input type="checkbox" id="" onChange={(e) => handleSause(e)} />
            <span className="inline-block text-gray-700 font-bold ml-3">
              Ketchup
            </span>
            <span className="float-right   text-gray-700 font-bold ">$2</span>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-10">
        <span className="text-xl font-bold text-gray-700 block my-3">
          Add a Topping?
        </span>
        <div className="rounded-lg border-2 border-solid">
          <div className="p-2  border-b-2 border-solid">
            <input type="checkbox" onChange={(e) => handleTopping(e, 3)} />
            <span className="inline-block text-gray-700 font-bold ml-3">
              Bread
            </span>
            <span className="float-right  text-gray-700 font-bold ">$3</span>
          </div>
          <div className="p-2  border-b-2 border-solid">
            <input type="checkbox" onChange={(e) => handleTopping(e, 5)} />
            <span className="inline-block text-gray-700 font-bold ml-3">
              Cheese
            </span>
            <span className="float-right  text-gray-700 font-bold ">$5</span>
          </div>
          <div className="p-2 ">
            <input type="checkbox" onChange={(e) => handleTopping(e, 7)} />
            <span className="inline-block text-gray-700 font-bold ml-3">
              Mashroom
            </span>
            <span className="float-right  text-gray-700 font-bold ">$7</span>
          </div>
        </div>
      </div>
      <button
        onClick={addToCart}
        className="sticky bottom-4 w-full py-3 bg-[#6DC54A] text-white rounded-md"
      >
        Add to Cart (${formatPrice(totalPrice)})
      </button>
    </div>
  );
};

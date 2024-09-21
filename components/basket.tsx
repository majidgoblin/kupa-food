'use client'

import { ChangeEvent, FC, useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IoMdHeart, IoMdHeartEmpty, IoMdClose } from "react-icons/io";
import { RootState } from "@/app/store";
import { close } from "@/redux/basketSlice";
import { IBasket, IProduct } from "@/types/product";
import { addToCart } from "@/redux/cartSlice";
import AmountButton from "./amountBtn";

const Basket: FC<IBasket> = ({ products }) => {

    const [like, disLike] = useState<boolean>(false)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [amount, setAmount] = useState<number>(1)
    const [product, setProduct] = useState<IProduct[]>([{
        name: '',
        price: 0,
        image: '',
        description: '',
    }])

    const state = useSelector((state: RootState) => state.basket)
    const dispatch = useDispatch()

    //bug here
    useEffect(() => {
        if (state.id !== 0) {
            const data = products?.filter(({ id }) => id === state.id);
            setProduct(data);
            setTotalPrice(data[0].price);
        }
    }, [state.id])

    const handleClose = () => {
        dispatch(close());
        setAmount(1);
        setTotalPrice(0);
    }

    const handleAdd = () => {
        let newPrice = totalPrice + product[0].price;
        let count = amount + 1;
        setTotalPrice(newPrice);
        setAmount(count);
    }

    const handleDecrise = () => {
        if (amount > 1) {
            let count = amount - 1;
            let newPrice = totalPrice - product[0].price;
            setTotalPrice(newPrice);
            setAmount(count);
        }
    }

    const handleAddToCart = () => {
        const params = {
            id: product[0].id,
            price: product[0].price,
            title: product[0].name,
            image: product[0].image,
            amount,
            totalPrice,
        };
        dispatch(addToCart(params));
        setAmount(1);
        setTotalPrice(0);
        dispatch(close());
    }

    const handleSause = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked)
            setTotalPrice(totalPrice + 2)
        else setTotalPrice(totalPrice - 2)
    }

    const handleTopping = (event: ChangeEvent<HTMLInputElement>, price: number) => {
        if (event.target.checked)
            setTotalPrice(totalPrice + price)
        else setTotalPrice(totalPrice - price)
    }

    return (
        <div className={`rounded-xl  transition-all duration-[0.3s] p-5 px-6 overflow-scroll 
         bg-white h-[85%] w-screen left-0 fixed  z-10 ${state.status === true ? `bottom-0` : `bottom-[-100%]`} `} >
            <div className="mb-3" onClick={handleClose}>
                <IoMdClose />
            </div>
            <Image alt="kupa" width={200} height={200} src={product[0].image} className="w-[100%] h-[300px] rounded-md" />
            <div className="flex justify-between items-start mt-7">
                <div>
                    <span className="block text-gray-800 text-xl font-bold">{product[0]?.name}</span>
                    <span className="block text-gray-400 text-sm">{product[0]?.description}</span>

                </div>
                <div className="cursor-pointer" onClick={() => disLike(!like)}>
                    {like ? <IoMdHeart className="w-[30px] text-red" /> : <IoMdHeartEmpty className="w-[30px]" />}
                </div>
            </div>
            <AmountButton
                handleDecrise={handleDecrise}
                handleAdd={handleAdd}
                totalPrice={totalPrice}
                amount={amount}
            />
            <div className="border-b-2 border-solid pb-8">
                <span className="text-xl font-bold text-gray-700 block my-3">Sause</span>
                <div className="rounded-lg border-2 border-solid">
                    <div className="p-2  border-b-2 border-solid">
                        <input type="checkbox" onChange={(e) => handleSause(e)} />
                        <span className="inline-block text-gray-700 font-bold ml-3">Barbeque</span>
                        <span className="float-right   text-gray-700 font-bold ">$2</span>
                    </div>
                    <div className="p-2  ">
                        <input type="checkbox" id='' onChange={(e) => handleSause(e)} />
                        <span className="inline-block text-gray-700 font-bold ml-3">Ketchup</span>
                        <span className="float-right   text-gray-700 font-bold ">$2</span>
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-24">
                <span className="text-xl font-bold text-gray-700 block my-3">Add a Topping?</span>
                <div className="rounded-lg border-2 border-solid">
                    <div className="p-2  border-b-2 border-solid">
                        <input type="checkbox" onChange={(e) => handleTopping(e,3)} />
                        <span className="inline-block text-gray-700 font-bold ml-3">Bread</span>
                        <span className="float-right  text-gray-700 font-bold ">$3</span>
                    </div>
                    <div className="p-2  border-b-2 border-solid">
                        <input type="checkbox" onChange={(e) => handleTopping(e,5)} />
                        <span className="inline-block text-gray-700 font-bold ml-3">Cheese</span>
                        <span className="float-right  text-gray-700 font-bold ">$5</span>
                    </div>
                    <div className="p-2 ">
                        <input type="checkbox" onChange={(e) => handleTopping(e,7)} />
                        <span className="inline-block text-gray-700 font-bold ml-3">Mashroom</span>
                        <span className="float-right  text-gray-700 font-bold ">$7</span>
                    </div>
                </div>
            </div>
            <button onClick={handleAddToCart} className={` ${state.status === true ? `fixed bottom-5` : `hidden`} w-[88%]  mb-5 py-3
             text-gray-50 bg-green-500 rounded-md text-center`}>
                Add to Cart (${totalPrice})
            </button>
        </div>
    )
}

export default Basket
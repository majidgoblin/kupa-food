'use client'

import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import AmountButton from "../amountBtn"
import { FC, useState } from "react"
import { RootState } from "@/app/store"
import { addItem, decreaseItem, deleteItem } from "@/redux/cartSlice"
import { ISate } from "@/types/product"

const CartBox: FC<ISate> = ({ id, amount, price, totalPrice, title, image }) => {

    // const [totalPrice, setTotalPrice] = useState<number>(0);
    const [itemAmount, setAmount] = useState<number>(1);

    const state = useSelector((state: RootState) => state.basket);
    const items = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addItem(id))
        // let newPrice = totalPrice;
        // let count = itemAmount + 1;
        // setTotalPrice(newPrice);
        // setAmount(count);
    };

    const handleDecrise = () => {
        if (amount > 1) {
            dispatch(decreaseItem(id))
            // let count = itemAmount - 1;
            // let newPrice = totalPrice;
            // setTotalPrice(newPrice);
            // setAmount(count);
        }
        else
        {
            dispatch(deleteItem(id))
        }
    };

    return (
        <div className="grid grid-cols-3 border-solid border-b-2 py-3 last:border-b-0">
            <Image width={200} height={200} alt='kupa'
                src={image} className="rounded-md w-[100px] h-[100px]" />
            <div className="">
                <span className="block text-gray-800 font-bold text-lg">{title}</span>
                <AmountButton
                    handleDecrise={handleDecrise}
                    handleAdd={handleAdd}
                    totalPrice={totalPrice}
                    amount={amount}
                    page="cart"
                />

            </div>

        </div>
    )
}

export default CartBox
'use client'

import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import AmountButton from "../amountBtn"
import { FC, useState } from "react"
import { RootState } from "@/app/store"
import { addItem, decreaseItem, deleteItem } from "@/redux/cartSlice"
import { ISate } from "@/types/product"
import { useCart } from "@/zustand/cart"

const CartBox: FC<ISate> = ({ id, amount, totalPrice, title, image }) => {

    const cart = useCart((state) => state);

    const handleAdd = () => {
        cart.addItem(id)
    };

    const handleDecrise = () => {
        if (amount > 1)
            cart.decreaseItem(id)
        else
            cart.deleteItem(id)
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
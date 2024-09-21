"use client"

import { NextPage } from "next"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartBox from "@/components/cart/cartBox";
import { useRouter } from "next/router";
import Link from "next/link";

const Cart: NextPage = () => {

    const [cartCount, setCount] = useState<number>(0)

    const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        if (!!items && items[0].id !== 0)
            setCount(items.length)
    }, [items])



    return (
        <div className='relative pb-10 overflow-scroll'>
            {
                (  items[0].id !== 0)
                    ?
                    <div>
                        <span className="font-bold text-lg text-gray-800 block my-3">Your Order {`(${cartCount})`}</span>
                        <div className=" mb-16">
                            {items.map((row) => {
                                return <CartBox
                                    id={row.id}
                                    totalPrice={row.totalPrice}
                                    amount={row.amount}
                                    price={row.price}
                                    title={row.title}
                                    image={row.image}
                                    key={row.id}
                                />
                            })}
                        </div>
                        <button  className="w-[90%]  fixed bottom-10 mb-10 py-3 text-gray-50 bg-green-500 rounded-md text-center">
                            <Link  href="/confirm" >Order</Link>
                        </button>
                    </div>
                    :
                    <span className="font-bold block text-center text-lg text-gray-800  my-14">Nothing In Your Cart</span>
            }

        </div>
    )
}

export default Cart
"use client"

import { RootState } from "@/app/store"
import { useSelector } from "react-redux"

const SummaryBox = () => {

    const items = useSelector((state: RootState) => state.cart.items);

    let lastPrice = 0;
    for (let i = 0; i < items.length; i++) {
        lastPrice = items[i].totalPrice + lastPrice;
    }

    return (
        <div className="bg-green-50 rounded-md mt-5 p-3">
            <span className="font-bold block my-3 text-green-500">Summary</span>
            <div className="py-1">
                <span className="text-green-500">price</span>
                <span className="float-right font-bold text-green-500">${lastPrice}</span>
            </div>
            <div className="py-2 ">
                <span className="text-green-500">shipping</span>
                <span className="float-right font-bold text-green-500">2$</span>
            </div>
            <div className="pt-4 pb-2 border-t-2 border-gray-900">
                <span className="text-green-500">Total payment</span>
                <span className="float-right font-bold text-green-500">${lastPrice + 2}</span>
            </div>
        </div>
    )
}

export default SummaryBox
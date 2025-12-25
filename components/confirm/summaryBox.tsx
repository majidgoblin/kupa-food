"use client"

import { useCart } from "@/zustand/cart"

const SummaryBox = () => {

    const items = useCart((state) => state.items);

    let lastPrice = 0;
    for (let i = 0; i < items.length; i++) {
        lastPrice = items[i].totalPrice + lastPrice;
    }

    return (
        <div className="bg-green-50 rounded-md mt-5 p-3">
            <span className="font-bold block my-3 text-primary">Summary</span>
            <div className="py-1">
                <span className="text-primary">price</span>
                <span className="float-right font-bold text-primary">${lastPrice}</span>
            </div>
            <div className="py-2 ">
                <span className="text-primary">shipping</span>
                <span className="float-right font-bold text-primary">2$</span>
            </div>
            <div className="pt-4 pb-2 border-t-2 border-gray-900">
                <span className="text-primary">Total payment</span>
                <span className="float-right font-bold text-primary">${lastPrice + 2}</span>
            </div>
        </div>
    )
}

export default SummaryBox
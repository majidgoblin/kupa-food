import { FC } from "react"
import { IDiscount } from "@/types/product"
import Image from "next/image"

const HomeDiscounts: FC<IDiscount> = ({ name, discount, image }) => {
  return (
    <div className="grid grid-cols-2 rounded-md bg-gray-300 mt-8">
      <div className="p-5">
        <span className="block text-xl font-bold">{name}</span>
        <span className="block text-md ">Discount {discount}%</span>
        <button >order now</button>
      </div>
      <div>
        <Image  alt="kupa" src={image} width={100} height={100} className="rounded-md w-[130px] h-[120px] float-right" />
      </div>
    </div>
  )
}

export default HomeDiscounts
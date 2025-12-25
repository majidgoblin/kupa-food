import { FC } from "react"
import { IProduct } from "@/types/product"
import Image from "next/image"
import { useBasket } from "@/zustand/basket"

const ProductBox: FC<IProduct> = ({ id, image, price, name }) => {

    const open = useBasket((state) => state.open);
    const setProductId = useBasket(s => s.productId)

    const handleClick = () => {
        setProductId(id)
        open()
    }

    return (
        <div className="text-left" onClick={handleClick}>
            <Image alt="kupa" src={image} width={100} height={100} className="rounded-md w-[130px] h-[130px]" />
            <span className="block text-sm font-bold text-gray-800 my-1">{name}</span>
            <span className="block text-md font-bold text-primary">${price}</span>
        </div>
    )

}

export default ProductBox
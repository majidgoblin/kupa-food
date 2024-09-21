import { FC } from "react"
import { IProduct } from "@/types/product"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { open, productId } from "@/redux/basketSlice"

const ProductBox: FC<IProduct> = ({ id, image, price, name }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(open())
        dispatch(productId(id))
    }

    return (
        <div className="text-left" onClick={handleClick}>
            <Image alt="kupa" src={image} width={100} height={100} className="rounded-md w-[130px] h-[130px]" />
            <span className="block text-sm font-bold text-gray-800 my-1">{name}</span>
            <span className="block text-md font-bold text-green-500">${price}</span>
        </div>
    )
}

export default ProductBox
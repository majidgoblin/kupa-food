import { FC } from "react"
import { IoMdClose } from "react-icons/io";

interface IProps {
    handleDecrise: () => void;
    handleAdd: () => void;
    amount: number;
    totalPrice: number;
    page?: string;
}

const AmountButton: FC<IProps> = ({ handleDecrise, amount, handleAdd, totalPrice, page }) => {
    return (
        <>
            <div className={`flex items-center mb-4 ${page === 'cart' ? 'border-b-0' : 'border-b-2'} border-solid pb-3`}>
                <div className={`rounded-xl my-3 mr-3 bg-gray-300 flex flex-wrap justify-between
            ${page === 'cart' ? 'w-[80%]' : ' w-[30%]'}  p-1`}>
                    <div className="rounded-full bg-gray-500 flex justify-center items-center cursor-pointer  w-[25px] h-[25px] text-white ">
                        <span onClick={handleDecrise} className="font-lg">-</span>
                    </div>
                    <span>{amount}</span>
                    <div
                        className="rounded-full bg-green-500 flex 
                                    justify-center items-center cursor-pointer  w-[25px] h-[25px] text-white">
                        <span onClick={handleAdd} className="font-xl">+</span>
                    </div>
                </div>
                <span className="text-green-400 font-bold font-lg">${totalPrice}</span>

            </div>
        </>
    )
}

export default AmountButton
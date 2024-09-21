import { BsCashCoin } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";

const PaymentBox = () => {
    return (
        <div className="bg-green-50 rounded-md my-4 p-3">
            <div className="py-3">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <span className="bg-white px-3 rounded-full w-[40px] flex items-center h-[40px]"><BsCashCoin /></span>
                        <span className="px-2">chash</span>
                    </div>
                    <input className="" type="radio" name="payment" id="cash" />
                </div>
            </div>
            <div className="border-t-2 border-green-700 py-2">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <span className="bg-white px-3 rounded-full w-[40px] flex items-center h-[40px]"><CiCreditCard2 /></span>
                        <span className="px-2">credit cart</span>
                    </div>
                    <input className="float-right" type="radio" name="payment" id="cerdit" />
                </div>
            </div>
            <div className="border-t-2 border-green-700 pt-2">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <span className="bg-white px-3 rounded-full w-[40px] flex items-center h-[40px]"><IoWalletOutline /></span>
                        <span className="px-2">wallet</span>
                    </div>
                    <input className="float-right" type="radio" name="payment" id="wallet" />
                </div>
            </div>
        </div>
    )
}

export default PaymentBox
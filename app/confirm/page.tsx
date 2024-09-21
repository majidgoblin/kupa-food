import PaymentBox from "@/components/confirm/paymentBox"
import SummaryBox from "@/components/confirm/summaryBox"

const Confirm = () => {
    return (
        <>
            <SummaryBox />
            <PaymentBox />
            <button className="w-[100%] py-3 text-gray-50 bg-green-500 rounded-md text-center">
                Confirm
            </button>
        </>
    )
}

export default Confirm
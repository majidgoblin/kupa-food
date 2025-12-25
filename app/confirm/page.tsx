import PaymentBox from "@/components/confirm/paymentBox"
import SummaryBox from "@/components/confirm/summaryBox"

const Confirm = () => {
    return (
        <div className='relative pb-20 overflow-scroll'>
            <SummaryBox />
            <PaymentBox />
            <button className="w-[90%] fixed bottom-16 py-3 text-gray-50 bg-primary rounded-md text-center">
                Confirm
            </button>
        </div>
    )
}

export default Confirm
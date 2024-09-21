
import { FaChevronRight } from "react-icons/fa";

const AddressBox = () => {
    return (
        <div className="rounded-md flex items-center justify-between bg-green-500 p-4 mt-6 shadow-lg">
            <div>
                <span className="block text-gray-300 font-bold">Delivery to home</span>
                <span className="block text-gray-300 mb-2">ultra state , simon Avu , no 23</span>
                <span className="rounded-md py-1 px-3 text-green-400 bg-gray-300 text-sm">2.4 km</span>
            </div>
            <div>
            <FaChevronRight className="text-gray-300 " />
            </div>
        </div>
    )
}

export default AddressBox
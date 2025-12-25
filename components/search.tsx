import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
    return (
        <div className="bg-white rounded-lg flex items-center justify-start  p-2">
            <IoIosSearch className="text-gray-400 w-[40px] h-[25px] " />
            <input className="bg-transparent p-1 text-left outline-none" type="text" placeholder={`Search in Kupa`} />
        </div>
    )
}

export default SearchBox
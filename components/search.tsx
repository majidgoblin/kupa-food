import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
    return (
        <div className="bg-gray-200 rounded-md flex items-center justify-start border-solid border-2 border-gray-400 p-1">
            <IoIosSearch className="text-gray-400 w-[40px] h-[25px] " />
            <input className="bg-transparent p-1 text-left outline-none" type="text" placeholder={`Search in Kupa`} />
        </div>
    )
}

export default SearchBox
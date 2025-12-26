import { FaSlidersH , FaMapMarkerAlt } from "react-icons/fa";

const AddressBox = () => {
  return (
    <div className=" flex items-center justify-between  py-1 px-1 mt-4 bg-transparent ">
      <div >
        <div className="flex items-center">
          <FaMapMarkerAlt size={20} className="text-txt-primary mr-2" />
          <span className="text-txt-primary font-semibold text-[15px]">Home</span>
        </div>
        <span className="block  ml-7 text-sm text-txt-primary ">
          ultra state , simon Avu , no 23
        </span>
        {/* <span className="rounded-md py-1 px-3 text-green-400 bg-gray-300 text-sm">2.4 km</span> */}
      </div>
      <div>
        <FaSlidersH  className="text-txt-primary" />
      </div>
    </div>
  );
};

export default AddressBox;

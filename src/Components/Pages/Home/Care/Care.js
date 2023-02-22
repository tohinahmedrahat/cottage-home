import React from "react";
import { FaPhone } from "react-icons/fa";
import carebg from "../../../../assets/get-care.jpg";

const Care = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${carebg})` }}
    >
      <div className="pt-40">
        <h1 className="text-[35px] font-bold relative font-[PlayfairDisplay] text-white care">
          Get Care
        </h1>
        <div className="pt-11 pb-[120px] font-[Roboto] flex justify-center items-center space-y-7 md:space-y-0 md:space-x-7 flex-wrap">
          <button className="flex items-center px-16 py-6 border border-[#00a6b2] rounded-full text-white hover:bg-[#00a6b2] duration-500">
            <FaPhone className="mr-2" />
            Call Us
          </button>
          <button className="flex items-center px-16 py-6 border border-[#00a6b2] rounded-full text-white bg-[#00a6b2] duration-500">
            Get Care
          </button>
        </div>
      </div>
    </div>
  );
};

export default Care;

import React from "react";
import { FaPhone } from "react-icons/fa";
import carebg from "../../../../assets/get-care.jpg";

const Care = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center text-center "
      style={{ backgroundImage: `url(${carebg})` }}
    >
      <div className="pt-40">
        <h1 className="text-[35px] font-bold relative font-[PlayfairDisplay] text-white afterEffect">
          Get Care
        </h1>
        <div className="pt-11 pb-[120px] font-[Roboto] flex justify-center items-center space-y-7 md:space-y-0 md:space-x-7 flex-wrap">
          <a
            href="tel:+1516-367-2266"
            className="flex items-center px-16 py-6 border border-[#00a6b2] rounded-full text-white hover:bg-[#00a6b2] duration-500 bg-hov2"
          >
            <FaPhone className="mr-2" />
            Call Us
          </a>
          <button className="flex items-center px-16 py-6 border border-[#00a6b2] rounded-full text-white bg-primary duration-500 bg-hov2">
            Get Care
          </button>
        </div>
      </div>
    </div>
  );
};

export default Care;

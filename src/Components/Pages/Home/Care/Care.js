import React from "react";
import { FaPhone } from "react-icons/fa";
import carebg from "../../../../assets/contact.jpg";

const Care = () => {
  document.documentElement.style.scrollBehavior = "smooth";
  return (
    <div
      className="bg-no-repeat bg-cover bg-center text-center min-h-[80vh]"
      style={{ backgroundImage: `url(${carebg})` }}
    >
      <div className="pt-[40vh]">
        <h1 className="text-[35px] font-bold relative font-[PlayfairDisplay] text-white afterEffect">
          Contact Us
        </h1>
        <div className="pt-11 pb-[120px] font-[Roboto] flex justify-center items-center gap-8 md:gap-0 md:space-y-0 md:space-x-7 flex-wrap">
          <a
            href="tel:+1516-367-2266"
            className="flex items-center px-6 py-3 md:px-16 md:py-6 border border-[#00a6b2] rounded-full text-white hover:bg-[#00a6b2] duration-500 bg-hov2"
          >
            <FaPhone className="mr-2" />
            Call Us
          </a>
          <a href="#contact-info" className="flex items-center px-6 py-3 md:px-16 md:py-6 border border-[#00a6b2] rounded-full text-white bg-primary duration-500 bg-hov2">
            Get Care
          </a>
        </div>
      </div>
    </div>
  );
};

export default Care;

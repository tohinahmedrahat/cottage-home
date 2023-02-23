import React from "react";
import background from "../../../../assets/banner.jpg";
import comfort from "../../../../assets/comfort.png";
import relief from "../../../../assets/relief-1.png";
import peace from "../../../../assets/peace.png";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center text-center min-h-[100vh]"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-2xl tracking-[1px] mx-auto pt-40 md:pt-[25vh] ">
          <h1 className="md:text-6xl text-5xl px-[15px] text-white font-[PlayfairDisplay] mb-[45px]">
            RIGHT HOME CARE FOR YOU
          </h1>
          <h4 className="text-2xl font-semibold text-[#dbf2f4] font-[Roboto] mb-8 px-5 md:px-0">
            “PCA CDPAP SERVICES THROUGHOUT NEW YORK CITY”
          </h4>
        </div>
        <div className=" mt-[10vh] flex justify-center text-white font-semibold gap-8">
          <a
            href="tel:+1516-367-2266"
            className=" px-8 py-4 rounded-full text-xl bg-primary uppercase  bg-hov2"
          >
            Contact Us
          </a>
          <button className=" px-8 py-4 rounded-full text-xl border-2 border-primary bg-hov2">
            Apply For a HHA Certification
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex justify-center bg-[#DBF2F4] py-6">
          <div className=" flex items-center gap-5   ">
            <img src={comfort} alt="" className="w-14 h-14" />
            <p className="text-2xl font-semibold ">Find comfort</p>
          </div>
        </div>
        <div className="flex justify-center bg-[#49A4B0] py-6">
          <div className=" flex items-center gap-5   ">
            <img src={relief} alt="" className="w-14 h-14" />

            <p className="text-2xl font-semibold text-white">Find relief</p>
          </div>
        </div>
        <div className="flex justify-center bg-[#322E51] py-6">
          <div className=" flex items-center gap-5   ">
            <img src={peace} alt="" className="w-14 h-14" />
            <p className="text-2xl font-semibold text-white">
              Find peace of mind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

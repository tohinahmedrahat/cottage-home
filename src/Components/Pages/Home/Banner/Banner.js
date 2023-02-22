import React from "react";
import background from "../../../../assets/cooking2.png";

const Banner = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-lg tracking-[1px] mx-auto pt-40 md:pt-52 pb-28">
        <h4 className="text-2xl font-semibold text-[#dbf2f4] font-[Roboto] mb-8 px-5 md:px-0">
          “I was hopeless and depressed. I couldn’t even clean my own home!”
        </h4>
        <h1 className="md:text-6xl text-5xl px-[15px] text-white font-[PlayfairDisplay] mb-[45px]">You don’t have to struggle.</h1>
        <p className="text-white text-lg font-[Roboto]">Our in-home caregivers can help.</p>
      </div>
    </div>
  );
};

export default Banner;

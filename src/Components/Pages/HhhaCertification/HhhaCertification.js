import React from "react";
import image1 from "../../../assets/hhaBanner.jpg";

const HhhaCertification = () => {
  return (
    <div>
      <div className="relative">
        <img src={image1} className="w-full" alt="" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/50  h-full flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl mb-5 font-bold text-center">
            Welcome to HHCA
            <br />
            Training Institute
          </h1>
          <p className="text-white max-w-xl text-center mx-auto text-lg">
            Get Certified & Launch Your Career at HHCA Training Institute -
            We're Offering Day, Evening & Weekend Classes. Call Now ENGLISH
            (718) 298-5010,
          </p>
          <button className="px-5 py-3 bg-gray-700 hover:bg-gray-800 duration-300 text-white mt-5">Learn More</button>
        </div>
      </div>

      <div>class card</div>

      <div></div>
    </div>
  );
};

export default HhhaCertification;

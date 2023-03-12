import React from "react";
import hhhaImage from "../../../assets/hhaimage.png";

const HhhaCertificationAbout = () => {
  return (
    <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between max-w-7xl">
      <div className="flex flex-col justify-center p-6 text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="leading-none sm:text-6xl ">
          <span className="lg:text-[40px] text-2xl font-extralight text-[#353535]">
            Dedicated Educators
          </span>{" "}
          <br />
          <span className="lg:text-[46px] text-4xl font-bold text-[#3f3e3e]">
            Our classes are
          </span>
          <br />
          <span className="text-[40px] text-3xl font-medium text-[#f26528]">
            taught by dedicated and experienced educators
          </span>
        </h1>
        <p className="mt-6 mb-8 text-sm text-[#777777] sm:mb-12">
          Both of our instructors have over 30 years of experience as Registered
          Nurses. Immediate Job Placement Your success is our priority. To
          support you, we have partnered with our sister agency, Cottage Home
          Care Services, to get you started and working as fast as a day after
          graduation! First-Rate Course Offerings We embrace a learning
          environment that will prepare you for the path ahead. Our classes
          incorporate traditional learning styles as well as hands-on
          experiences.
        </p>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img
          src={hhhaImage}
          alt=""
          className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        />
      </div>
    </div>
  );
};

export default HhhaCertificationAbout;

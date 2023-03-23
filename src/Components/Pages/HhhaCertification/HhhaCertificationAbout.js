import React from "react";
import { FaStar } from "react-icons/fa";
import hhhaImage from "../../../assets/hha cover .jpg";

const HhhaCertificationAbout = () => {
  return (
    <div className="flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:pt-24 lg:flex-row lg:justify-between max-w-7xl items-start">
      <div className="flex flex-col justify-center lg:p-6 text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <div
          className="flex items-center "
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
          <h3 className="font-semibold text-lg lg:w-80 text-justify">
            <h5 className="text-[#00a6b2] font-semibold text-lg">
              Dedicated Educators{" "}
            </h5>
            <p className="font-normal pr-3 md:pr-0">
              Our classes are taught by dedicated and experienced educators.
              Both of our instructors have over 30 years of experience as
              Registered Nurses.
            </p>
          </h3>
        </div>
        <div
          className="flex items-center mt-5 "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
          <h3 className="font-semibold text-lg lg:w-80 text-justify">
            <h5 className="text-[#00a6b2] font-semibold text-lg">
              {" "}
              Immediate Job Placement{" "}
            </h5>
            <p className="font-normal pr-3 md:pr-0">
              Your success is our priority. To support you, we have partnered
              with our sister agency, Cottage Home Care Services, to get you
              started and working as fast as a day after graduation!
            </p>
          </h3>
        </div>
        <div
          className="flex items-center mt-5 "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
          <h3 className="font-semibold text-lg lg:w-80 text-justify">
            <h5 className="text-[#00a6b2] font-semibold text-lg">
              {" "}
              First-Rate Course Offerings{" "}
            </h5>
            <p className="font-normal pr-3 md:pr-0">
              We embrace a learning environment that will prepare you for the
              path ahead. Our classes incorporate traditional learning styles as
              well as hands-on experiences.
            </p>
          </h3>
        </div>
      </div>
      <div
        className="mx-auto p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <img
          src={hhhaImage}
          alt=""
          className="object-contain md:h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
          // data-aos="fade-left"
          // data-aos-duration=""
        />
      </div>
    </div>
  );
};

export default HhhaCertificationAbout;

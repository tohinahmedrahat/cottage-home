import React from "react";
import { FaStar } from "react-icons/fa";

import HhaCarousel from "./HhaCarousel"



const HhhaCertificationAbout = () => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-14">
         
      <div className="md:grid grid-cols-5 gap-8 items-center">
        <div className="col-span-2 mt-5 ">
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

        </div>
        <div className="col-span-3 mt-5 order-first sm:order-none ">
          
         <div>
          <HhaCarousel></HhaCarousel>
         </div>

        </div>
      

      </div>

    </div>
    
  );
};

export default HhhaCertificationAbout;

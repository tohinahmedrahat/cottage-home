import React from "react";
import { HiStar } from "react-icons/hi";
import image1 from "../../../../assets/parkinsons-activities1.jpg";
import image2 from "../../../../assets/Alzhiemers-activities2.jpg";

const Stressed = () => {
  return (
    <>
      
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 mt-14" id="hha">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div
            className="mb-10  lg:max-w-lg lg:pr-5 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="max-w-xl mb-6 md:px-14">
              <p className="max-w-lg  text-lg md:text-2xl font-semibold tracking-tight text-[#67637e] mt-3 ">
                HHA / PCA
              </p>
              <hr className="border-[1px] border-primary w-[100px] md:w-[120px] mb-4" />
              <div className="text-base text-gray-700 md:text-lg">
                <p className="text-justify">
                This service will allow us to send a professionally trained and certified home health aide to take care of family or loved ones, leaving you worry-free and with peace of mind. 
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative lg:w-1/2"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img
              className="object-cover w-full  rounded "
              src={image1}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8  lg:py-16" id="cdpap">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div
            className="relative lg:w-1/2 mb-10 lg:mb-0"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <img
              className="object-cover w-full  rounded "
              src={image2}
              alt=""
            />
          </div>
          <div
            className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <div className="max-w-xl mb-6 md:px-11">
              <p className="max-w-lg  text-lg md:text-2xl font-semibold tracking-tight text-[#67637e] ">
                CDPAP
              </p>
              <hr className="border-[1px] border-primary w-[60px] md:w-[80px] mb-4" />
              <div className="text-base text-gray-700 md:text-lg">
                
                <p className="text-justify">
                This service allows us to directly pay you or a friend to take care of your own loved ones, allowing them to be reimbursed for their hard work!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stressed;

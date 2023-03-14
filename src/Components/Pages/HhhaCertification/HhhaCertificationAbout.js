import React from "react";
import { FaStar } from "react-icons/fa";
import hhhaImage from "../../../assets/hhaimage.png";

const HhhaCertificationAbout = () => {
  return (
    <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between max-w-7xl">
      <div className="flex flex-col justify-center p-6 text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">

        <div className='flex items-center '>
          <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
          <h3 className='font-semibold text-lg w-80 text-justify'>           
            <h5 className='text-[#00a6b2] font-semibold text-lg'>Dedicated Educators </h5>  
            <p className="font-normal">         
            Our classes are taught by dedicated and experienced educators. Both of our instructors have over 30 years of experience as Registered Nurses.
            </p>
            </h3>
        </div>
        <div className='flex items-center mt-5 '>
          <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
          <h3 className='font-semibold text-lg w-80 text-justify'>           
            <h5 className='text-[#00a6b2] font-semibold text-lg'> Immediate Job Placement </h5>  
            <p className="font-normal"> 
            Your success is our priority. To support you, we have partnered with our sister agency, Cottage Home Care Services, to get you started and working as fast as a day after graduation!       
            </p>
            </h3>
        </div>
        <div className='flex items-center mt-5 '>
          <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
          <h3 className='font-semibold text-lg w-80 text-justify'>           
            <h5 className='text-[#00a6b2] font-semibold text-lg'> First-Rate Course Offerings </h5>  
            <p className="font-normal"> 
            We embrace a learning environment that will prepare you for the path ahead. Our classes incorporate traditional learning styles as well as hands-on experiences.       
            </p>
            </h3>
        </div>


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

import React from "react";
import image1 from "../../../../assets/preferred-whyus.png";
import image2 from "../../../../assets/preferred-whyus2.png";
import { FaStar } from 'react-icons/fa';

const WhyChoose = () => {
  return (
    <div className="pt-10 pb-[100px]">
      <div className="lg:flex max-w-4xl mx-auto items-center">
        <div className="lg:w-1/2 hidden md:block" data-aos="fade-right" data-aos-duration="2000">
          <div className="relative">
            <div>
              <img src={image1} className="w-1/2 lg:w-4/5 mx-auto lg:mx-0" alt="" />
            </div>
            <div className="absolute lg:-top-10 -top-10 lg:-left-48">
              <img src={image2} className="lg:w-2/5 w-1/3" alt="" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-5 lg:px-0" data-aos="fade-left" data-aos-duration="2000">
          <h1 className="text-[#322e51] text-[30px] playrify font-bold mb-4">
            Why choose Cottage Home Care Services?
          </h1>
          <div className='flex items-center'>
            <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
            <p className='text-[#67637e] text-base w-[95%] mx-auto text-justify '>Cottage Home Care Services has a person-led approach and genuinely cares for the welfare and well-being of our patients, aides, and staff. We're like family.</p>
          </div>
          <div className='flex items-center mt-5'>
            <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
            <p className='text-[#67637e] text-base w-[100%] mx-auto text-justify '>We will ensure your loved ones are safe, comfortable and given the best care bring relief to family members.</p>
          </div>
          <div className='flex items-center mt-5'>
            <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
            <p className='text-[#67637e] text-base w-[95%] mx-auto text-justify '>We provide personalized care. Each of our patients receive one-on-one attention and a care plan that is tailored to their specific. It makes treatment more effective and builds trust.</p>
          </div>


          <div className=" mt-[5vh] flex justify-start text-white gap-8">
            <a
              href="tel:+1516-367-2266"
              className=" px-9 py-4 rounded-full bg-primary capitalize  bg-hov2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

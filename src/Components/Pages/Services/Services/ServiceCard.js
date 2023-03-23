import React from 'react';
import { HiStar } from 'react-icons/hi';

const ServiceCard = () => {
    return (
        <div>
            <div className='md:w-[60%] mx-auto grid grid-cols-2 text-white'>

                <div className=' min-h-[24rem] bg-[#00A6B2]  shadow-xl text-center p-4 '>
                <div className="border-2 mb-6 md:px-14">
              <p className=" text-lg md:text-2xl font-semibold tracking-tight text-white ">
                HHA / PCA
              </p>
              <hr className="border-[1px] border-primary w-[100px] md:w-[120px] mb-4" />
              <div className="text-base text-white md:text-lg border-2 ">
                <h5 className="text-white font-semibold mb-4">
                  Preferred aides will provide:
                </h5>
                <p className="flex justify-start items-center mb-5 border-2">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-white text-[1em] md:tracking-wide">
                    Reliable medication reminders, so a dose is never forgotten.
                  </span>
                </p>
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-white text-[1em] md:tracking-wide">
                    Healthy, delicious meals, so your loved one gets the
                    nutrition they need.
                  </span>
                </p>
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-white text-[1em] md:tracking-wide">
                    Patient daily care with tasks like bathing, dressing and
                    grooming.
                  </span>
                </p>
              </div>
            </div>
                </div>

                <div className=' min-h-[24rem] bg-[#00A6B2] shadow-xl text-center p-4'>
                    <h2>Hello 2</h2>
                </div>


            </div>
            
        </div>
    );
};

export default ServiceCard;
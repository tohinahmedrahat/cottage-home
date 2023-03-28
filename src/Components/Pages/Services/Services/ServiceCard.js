import React from 'react';
import { HiStar } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';

const ServiceCard = () => {
    return (
        <div className='my-20'>
            <div className=' w-[95%] lg:w-[70%] mx-auto md:grid grid-cols-2 gap-10 text-white'>

                <div className='  bg-[#00A6B2] mt-5 shadow-xl text-center p-4 bg-hov2'>
                    <div className="mb-6 md:px-4 mt-3">
                        <p className=" text-lg md:text-2xl font-semibold tracking-tight text-white ">
                            HHA / PCA
                        </p>
                        <div className='flex justify-center'>
                            <hr className=" border-[1px] border-white w-[100px] md:w-[120px] mb-4" />
                        </div>
                        <div className="text-base text-white md:text-lg">
                            <h5 className="text-white font-semibold mb-4">
                                Preferred aides will provide:
                            </h5>
                            <p className="flex text-start justify-start items-center mb-5">
                                <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                                    <HiStar className="text-3xl" />
                                </span>
                                <span className="text-white text-[1em] md:tracking-wide">
                                    Reliable medication reminders, so a dose is never forgotten.
                                </span>
                            </p>
                            <p className="flex text-start justify-center items-center mb-5">
                                <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                                    <HiStar className="text-3xl" />
                                </span>
                                <span className="text-white text-[1em] md:tracking-wide">
                                    Healthy, delicious meals, so your loved one gets the
                                    nutrition they need.
                                </span>
                            </p>
                            <p className="flex text-start justify-center items-center mb-5">
                                <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                                    <HiStar className="text-3xl" />
                                </span>
                                <span className="text-white text-[1em] md:tracking-wide">
                                    Patient daily care with tasks like bathing, dressing and
                                    grooming.
                                </span>
                            </p>

                            <div className='flex justify-center pt-5'>
                                <a 
                                
                                href='#hha'
                                className='montserrat uppercase flex items-center gap-1 text-base font-medium text-white border-2 border-white px-3 py-2 bg-hov2'>

                                    Read More <IoIosArrowForward className='text-base font-semibold' />

                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='  bg-[#00A6B2] mt-5 shadow-xl text-center p-4 bg-hov2'>
                    <div className="mb-6 md:px-4 mt-3">
                        <p className=" text-lg md:text-2xl font-semibold tracking-tight text-white ">
                            CDPAP
                        </p>
                        <div className='flex justify-center'>
                            <hr className=" border-[1px] border-white w-[100px] md:w-[120px] mb-4" />
                        </div>
                        <div className="text-base text-white md:text-lg">
                            <h5 className="text-white font-semibold mb-4">
                                Preferred aides will provide:
                            </h5>
                            <p className="flex text-start justify-start items-center mb-5">
                                <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                                    <HiStar className="text-3xl" />
                                </span>
                                <span className="text-white text-[1em] md:tracking-wide">
                                    Reminders + escorts, so appointments are never missed you.
                                </span>
                            </p>
                            <p className="flex text-start justify-center items-center mb-5">
                                <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                                    <HiStar className="text-3xl" />
                                </span>
                                <span className="text-white text-[1em] md:tracking-wide">
                                    Warm companionship, so your loved one is never lonely - even on the most confusion-filled days
                                </span>
                            </p>
                            <p className="flex text-start justify-center items-center mb-5">
                                <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                                    <HiStar className="text-3xl" />
                                </span>
                                <span className="text-white text-[1em] md:tracking-wide">
                                    A calming, steady presence that helps prevent power struggles and flare-ups.
                                </span>
                            </p>
                            <p className="flex text-start justify-center items-center mb-5">
                                <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                                    <HiStar className="text-3xl" />
                                </span>
                                <span className="text-white text-[1em] md:tracking-wide">
                                    Unparalleled protection from frightening, dangerous wandering.
                                </span>
                            </p>

                            <div className='flex justify-center pt-5'>
                                <a href='#cdpap' className='montserrat uppercase flex items-center gap-1 text-base font-medium text-white border-2 border-white px-3 py-2 bg-hov2'>

                                    Read More <IoIosArrowForward className='text-base font-semibold' />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
};

export default ServiceCard;
import React from 'react';


import { BsShieldShaded } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

import covidBanner from '../../../../src/assets/Covid-19/header-b.png'

const Banner = () => {

    
    return (
        <div className='md:grid grid-cols-2 gap-5 items-center'>

            <div className='font-[Roboto]'>
                <div className='flex gap-3 items-center'>
                    <p className='bg-[#F86168] font-[Roboto] text-white uppercase px-2 py-[2px] w-[90px] rounded-sm font-semibold'>
                        COVID-19
                    </p>

                    <p className=' text-[#F86168] font-semibold'>
                        Coronavirus
                    </p>
                </div>
                <h1 className='text-[#2D313D] lg:text-5xl  text-lg font-extrabold mt-5'>
                    Prevent the Spread <br />
                    Stay at Home, Stay Safe
                </h1>

                <p className='text-justify mt-5'>
                    The best way to prevent and slow down transmission is be well informed about the COVID-19 virus. Protect yourself and others from infection by washing your hands at-least 20sec and not touching your face.
                </p>

                <div className='mt-5 lg:mt-8  lg:flex items-center gap-10'>
                    <a  href="#actions-section" className='bg-primary px-5 py-3 bg-hov2 text-white shadow-md rounded-md  flex items-center gap-3'>
                        How to Protect <BsShieldShaded/>
                    </a>

                    <p className='flex gap-2 items-center text-primary font-semibold cursor-pointer bg-hov2 lg:mt-0 mt-3 '>
                        About COVID-19 <AiOutlineArrowRight/>
                    </p>
                </div>


            </div>

            <div>

                <img
                    src={covidBanner} className='md:h-[40vh] lg:h-[75vh] mx-auto' alt="" />


            </div>

        </div>
    );
};

export default Banner;
import React from 'react';
import { FaStar } from 'react-icons/fa';
import chatting from "../../../../assets/aide-chatting-with-fruit.jpg"

const HelpSection = () => {
    return (
        <div className='bg-[#EBF8F9]'>
            <h1 className='text-center text-4xl font-bold text-[#322e51] pt-20'>If you need help, <br /> you're not alone</h1>
            <hr className='border-[#00a6b2] border-t-2 w-12 mt-5 mb-36 mx-auto' />
            <div className='md:flex md:w-[90%] mx-auto pb-36'>
                <div className='bg-[#FFFFFF] pb-12 pt-16 pl-11 w-full'>
                    <h3 className='text-[#322e51] pb-12 font-semibold text-lg text-left'>Did you know?</h3>
                    <div className='flex items-center'>
                    <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
                    <p className='font-semibold text-lg w-80 text-left'><span className='text-[#00a6b2] font-semibold text-lg'>Nearly 50%</span> of people 65 or older need some assistance with routine daily activities.</p>
                    </div>
                    <div className='flex items-center pt-7'>
                    <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
                    <p className='font-semibold text-lg w-80 text-left'><span className='text-[#00a6b2] font-semibold text-lg'>Nearly 50%</span> of people 65 or older need some assistance with routine daily activities.</p>
                    </div>
                    <div className='flex items-center pt-7'>
                    <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
                    <p className='font-semibold text-lg w-80 text-left'><span className='text-[#00a6b2] font-semibold text-lg'>Nearly 50%</span> of people 65 or older need some assistance with routine daily activities.</p>
                    </div>
                </div>
                <div className='w-full ml-[-100px]'>
                    <img className='mt-[-50px]' src={chatting} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
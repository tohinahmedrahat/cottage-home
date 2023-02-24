import React from 'react';
import { FaStar } from 'react-icons/fa';
import chatting from "../../../../assets/healthier.jpg"

const HelpSection = () => {
    return (
        <div className='bg-[#EBF8F9]'>
            <h1 className='text-center playrify text-4xl font-bold text-[#322e51] pt-20'>When you’re getting the right help <br /> you live healthier — and happier</h1>
            <hr className='border-[#00a6b2] border-t-2 w-12 mt-5 mb-36 mx-auto' />
            <div className='md:flex md:w-[90%] mx-auto pb-36'>
                <div className='bg-[#FFFFFF] pb-12 pt-16 pl-11 w-full'>
                    <h3 className='text-[#322e51] pb-12 font-bold text-2xl text-left'>We Belive</h3>
                    <div className='flex items-center'>
                    <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
                    <p className='font-semibold text-lg w-80 text-left'><span className='text-[#00a6b2] font-semibold text-lg'>Aging is stressful enough.</span> The process of getting in-home care should be EFFORTLESS.</p>
                    </div>
                    <div className='flex items-center pt-7'>
                    <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
                    <p className='font-semibold text-lg w-80 text-left'><span className='text-[#00a6b2] font-semibold text-lg'>Every person deserves integrity.</span> Every human being on Earth deserves 100% compassionate care from a person of integrity.</p>
                    </div>
                    <div className='flex items-center pt-7'>
                    <FaStar className='mr-3 text-[#00A6B2] text-2xl'></FaStar>
                    <p className='font-semibold text-lg w-80 text-left'><span className='text-[#00a6b2] font-semibold text-lg'>Every family deserves peace of mind.</span> No family should have to spend their days worrying, wondering whether their loved one is suffering.</p>
                    </div>
                </div>
                <div className='w-full ml-[-100px]'>
                    <img className='mt-[-80px] w-[80%]' src={chatting} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
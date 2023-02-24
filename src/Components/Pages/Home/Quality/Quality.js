import React from 'react';
import dinner from "../../../../assets/dinner-plate-icon-large.png"
import washer from "../../../../assets/washer-machine-icon-large.png"
import nurse from "../../../../assets/nurse-icon-1.1.png"
import heart from "../../../../assets/two-heart-icons-large.png"
import blueTick from "../../../../assets/blue-tick-white-background-1.jpg"

const Quality = () => {
    return (
        <div className='bg-white'>
            <h6 className='pt-32 w-[33%] text-[#43BDC6] pb-7 tracking-widest text-xs font-semibold uppercase mx-auto'>"I'M ACTIVE AND MOBILE, BUT I HAVE TROUBLE GETTING DRESSED, KEEPING HOUSE, AND REMEMBERING TO TAKE MY MEDICATIONS."</h6>
            <h3 className="text-[#322e51] text-4xl font-bold text-center">Could you improve the quality of <br /> your life with reliable, competent <br /> in-home care?</h3>
            <hr className='border-[#00a6b2] border-t-2 w-12 mt-5 mb-8 mx-auto' />
            <h6 className='text-center'>Our attentive home care health aides will help you at every level of <br /> care:</h6>
            <div className='md:grid grid-cols-2  w-[90%] mx-auto pb-14 pt-9'>
                <div className='border border-gray-500 p-[90px]'>
                    <div className='flex justify-center'>
                        <img src={dinner} alt="" />
                    </div>
                    <h3 className='text-[#322e51] text-center font-semibold text-2xl my-8'>Personal Care</h3>
                    <div>
                        <div className='flex items-center'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>Bathing</p>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-500 p-[90px]'>
                    <div className='flex justify-center'>
                        <img src={washer} alt="" />
                    </div>
                    <h3 className='text-[#322e51] text-center font-semibold text-2xl my-8'>Household Care</h3>
                </div>
                <div className='border border-gray-500 p-[90px]'>
                    <div className='flex justify-center'>
                        <img src={nurse} alt="" />
                    </div>
                    <h3 className='text-[#322e51] text-center font-semibold text-2xl my-8'>Medical Care</h3>
                </div>
                <div className='border border-gray-500 p-[90px]'>
                    <div className='flex justify-center'>
                        <img src={heart} alt="" />
                    </div>
                    <h3 className='text-[#322e51] text-center font-semibold text-2xl my-8'>Emotional Care</h3>
                </div>
            </div>
        </div>
    );
};

export default Quality;
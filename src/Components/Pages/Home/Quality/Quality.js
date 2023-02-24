import React from 'react';

import nurse from "../../../../assets/nurse-icon-1.1.png"
import heart from "../../../../assets/two-heart-icons-large.png"
import blueTick from "../../../../assets/blue-tick-white-background-1.jpg"

const Quality = () => {
    return (
        <div className='bg-white '>
            
            <h3 className="text-[#322e51] text-4xl font-bold text-center mt-10">The Service We Provide <br /> in-home care</h3>
            <hr className='border-[#00a6b2] border-t-2 w-12 mt-5 mb-8 mx-auto' />
            <h6 className='text-center text-primary'>HHA/PCA CDPAP SERVICES THROUGHOUT NEW YORK CITY </h6>
            <div className='md:grid grid-cols-2  w-[90%] mx-auto pb-14 pt-9'>
               
              
                <div className='border border-primary p-[90px]' data-aos="zoom-in" data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <img src={nurse} alt="" />
                    </div>
                    <h3 className='text-[#322e51] text-center font-semibold text-2xl my-8 space-y-1'>HHA/PCA</h3>
                    <div>
                        <div className='flex items-center mb-1'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>Monitor patients Safety </p>
                        </div>
                        <div className='flex items-center mb-1'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>Light housekeeping</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>
                            Assist with home exercise program</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>
                            Prepare-Meal</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>
                            Even sometimes patient Total care</p>
                        </div>
                    </div>
                </div>
                <div className='border border-primary  p-[90px]'
                data-aos="zoom-in" data-aos-duration="2000">
                    <div className='flex justify-center'>
                        <img src={heart} alt="" />
                    </div>
                    <h3 className='text-[#322e51] text-center font-semibold text-2xl my-8'>CDPAP</h3>
                    <div>
                        <div className='flex items-center mb-1'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>Allows recipients to choose their own caregivers</p>
                        </div>
                        <div className='flex items-center mb-1'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>Who can be friends</p>
                        </div>
                        <div className='flex items-center mb-1'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>
                            Family members</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={blueTick} alt="" />
                            <p className='ml-4 text-[#67637e] font-normal text-lg'>Or other individuals of their choosing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quality;
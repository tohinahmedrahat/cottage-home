import React from 'react';

import CEO from '../../../../assets/aurthur-nenner6.jpg'

import icon from '../../../../assets/blue-quote.jpg'
const Welcome = () => {
    return (
        <div className='m-[150px] w-[95%] md:w-[80%] mx-auto  '>
            <div className='md:grid grid-cols-7 '>

                <div className='col-span-2 ml-10 md:-mt-[80px] md:-mr-14 '>
                    <img src={CEO} alt="" className='w-full h-[400px] md:pl-14' />

                </div>

                <div className='col-span-5 bg-[#EBF8F9] rounded-md -z-50'>
                    <div className='md:ml-[15%] mx-auto  py-10'>
                        <img src={icon} alt="" />
                        <p className='roboto font-bold text-xl'> “A Message from our CEO & Administrator Navin Shivpal”</p>
                        <p className='mt-3 roboto font-bold text-xl'>
                            “Welcome”
                        </p>
                        <p className='text-[#67637E] text-lg italic'>
                            My commitment to providing a reliable, professional, caring and utmost friendly service through my agency is my number one priority. That is why if you have any serious inquiries or concerns or looking for an agency that truly cares, I urge you to call me directly. Those interested in Home Health Care and the CDPAP may also contact me at any time!

                            347-975-2525.
                        </p>

                        
                        <button className='bg-primary text-white px-5 py-3 rounded-full text-base font-semibold mt-5 uppercase shadow-lg bg-hov2'>
                        Come Meet Me In Person
                        </button>
                      

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Welcome;
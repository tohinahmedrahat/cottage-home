import React from 'react';
import { Typewriter } from 'react-simple-typewriter'



import CEO from '../../../../assets/ceo-1.jpg'

import icon from '../../../../assets/blue-quote.jpg'
const Welcome = () => {
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    const handleType = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className='m-[150px] w-[95%] md:w-[80%] mx-auto  '>
            <div className='md:grid grid-cols-7 '>

                <div className=' col-span-2 md:ml-10 md:-mt-[80px] md:-mr-14 md:pl-14 ' data-aos="fade-down" data-aos-duration="2000">
                    <img src={CEO} alt="" className='w-full h-[380px] rounded-md ' />

                </div>

                <div className='mt-5 p-6 md:p-0 md:mt-0 col-span-5 bg-[#EBF8F9] rounded-md -z-50'data-aos="fade-left" data-aos-duration="3000">
                    <div className='md:ml-[15%] mx-auto  py-10'>
                        <img src={icon} alt="" />
                        <p className='roboto font-bold text-xl'>
                        <Typewriter
                            words={['“A Message from our CEO & Administrator”']}
                            loop={1000}
                            cursor
                            cursorStyle='।'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                         
                             </p>
                        <p className='mt-3 roboto font-bold text-xl'>
                            “Welcome”
                        </p>
                        <p className='text-[#67637E] text-lg italic'>
                            My commitment to providing a reliable, professional, caring and utmost friendly service through my agency is my number one priority. That is why if you have any serious inquiries or concerns or looking for an agency that truly cares, I urge you to call me directly. Those interested in Home Health Care and the CDPAP may also contact me at any time!

                            347-975-2525.
                        </p>

                        <p className='bg-primary px-5 mt-4 py-[1px] w-[168px]'>
                        </p>
                        <p className='roboto mt-1 font-bold text-lg'>
                            CEO - Navin Shivpal
                        </p>
                      
                      

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Welcome;
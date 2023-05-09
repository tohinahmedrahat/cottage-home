import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FaTiktok } from 'react-icons/fa';
import GoogleTranslate from '../../GoogleTranslate/GoogleTranslate';



const TopBar = () => {
    return (
        <div className=''>
           
            <div className='text-[#2E294E] block w-[95%] mx-auto'>
                <div className='flex justify-center lg:justify-between items-center '>
                <div className='roboto px-8 py-3 lg:flex items-center lg:justify-between lg:w-[95%]'>
                <div className='lg:flex gap-8 hidden'>
                    <div className='flex gap-4 items-center md:text-lg '>
                        <BsFillTelephoneFill />
                        <p>
                            Call  <a href="tel:+1516-367-2266" className='text-primary '> 516-367-2266</a>
                        </p>

                    </div>
                    <div className='flex gap-4 items-center md:text-lg '>
                        <TfiEmail />
                        <p>
                            Email  <a href="mailto:info@cottagehomecare.com" className='text-primary '> info@cottagehomecare.com</a>
                        </p>

                    </div>
                </div>

                <div className='lg:flex items-center gap-5 md:text-lg font-medium  text-primary hidden '>
                    {/* <div className="dropdown mr-[10%] ">
                        <label tabIndex={0} className=" cursor-pointer text-base ">Language</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-24 text-sm text-center">
                            <li className='mt-2 cursor-pointer'> 
                                    English  
                            </li>
                            <li className='mt-2 cursor-pointer'> 
                                    Spanish  
                            </li>
                            <li className='mt-2 cursor-pointer'> 
                                    Hindi  
                            </li>
                            
                        </ul>
                    </div> */}
                    <a href="https://www.facebook.com/CottageHCS" target='_blank'><BsFacebook className='md:text-2xl bg-hov2' /></a>


                    <a href="https://www.instagram.com/cottagehcs/" target='_blank'>
                        <BsInstagram className='md:text-2xl bg-hov2' />
                    </a>
                    <a href="https://twitter.com/cottagecareny" target='_blank'>
                        <BsTwitter className='md:text-2xl bg-hov2' />

                    </a>
                    <a href="https://www.tiktok.com/@cottagehomecare" target='_blank'>
                        <FaTiktok className='md:text-2xl bg-hov2' />

                    </a>




                </div>


            </div>
            <div>
                 <GoogleTranslate/>
            </div>
                </div>
            </div>

            <hr className='hidden lg:block' />
        </div>
    );
};

export default TopBar;
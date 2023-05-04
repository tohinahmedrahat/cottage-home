import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FaTiktok } from 'react-icons/fa';



const TopBar = () => {
    return (
        <div className='text-[#2E294E] hidden md:block'>
            <div className='roboto px-8 py-3 flex items-center justify-between'>
                <div className='flex gap-8'>
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
                <div className='flex items-center gap-5 md:text-lg font-medium md:mr-[5%] text-primary'>
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
            <hr />
        </div>
    );
};

export default TopBar;
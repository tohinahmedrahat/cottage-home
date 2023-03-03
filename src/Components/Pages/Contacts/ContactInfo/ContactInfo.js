import React from 'react';

import { IoLocationOutline } from 'react-icons/io5';
import { MdPhoneAndroid } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';
import { RiUserFollowLine } from 'react-icons/ri';

const ContactInfo = () => {


    const contacts = [

        {
            icon: <IoLocationOutline />,
            contactTitle: "Visit Us",
            contact1: "25 Newbridge Road, Suite 302, Hicksville, New York 11801, United States",
            contact2: "126-01 Liberty Avenue, South Richmond Hill Queens, New York 11419, United States",
            contact3: "391 East 149th Street, Bronx, New York 10455, United States"
        },
        {
            icon: <MdPhoneAndroid />,
            contactTitle: "Call Us",
            contact1: "Phone: 516-367-2266",
            contact2: "Fax: 516-367-2266",

        },
        {
            icon: <AiOutlineMail />,
            contactTitle: "Email Us",
            contact1: "info@cottagehomecare.com",
            contact2: "info@cottagehomecare.com",

        },
        {
            icon: <RiUserFollowLine />,
            contactTitle: "Follow Us",
            icons: [
                <FaFacebookF />,
                <AiOutlineTwitter />,
                <ImInstagram />




            ]

        },



    ]


    return (
        <div className='my-16'>
            <div>
                <div className='w-[95%] lg:w-[50%] mx-auto text-center' >

                    <h1 className='font-[PlayfairDisplay] my-5 text-3xl font-semibold '>Cottage Home Care Services</h1>
                    <p className='Poppins'> Cottage Home Care Services is open to any feedback. Have questions? Unsure whether you can be covered by your insurance for Home Care Services? Need assessment? We would love to speak to you. Please call or email us! Thank you! </p>
                </div>
            </div>



            <div className='w-[95%] lg:w-[85%] mx-auto md:grid grid-cols-4 mt-[100px] Poppins'>

                <div
                    className=' mr-1 mt-1 md:mt-0' >
                    <div className='relative bg-[#EBF8F9]  py-4 px-3 min-h-[24rem] rounded-md' data-aos="zoom-in" data-aos-duration="2000">
                        <h5 className='text-gray-700 text-lg text-center mt-14  font-bold font-[PlayfairDisplay]'>Visit Us</h5>

                        <p className='absolute bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl left-[37%] -top-8'><IoLocationOutline /></p>

                        <p className='mt-16 text-sm text-center text-gray-600 '>
                            25 Newbridge Road, Suite 302, Hicksville, New York 11801, United States

                        </p>
                        <p className='mt-4 text-sm text-center text-gray-600 '>
                            126-01 Liberty Avenue, South Richmond Hill Queens, New York 11419, United States

                        </p>
                        <p className='mt-4 text-sm text-center text-gray-600 '>
                            391 East 149th Street, Bronx, New York 10455, United States

                        </p>
                        {/* <a href='#' className='text-[#00a6b2b1] flex justify-center items-center text-2xl gap-5 text-gray-600 '>
                            {
                                contact?.icons
                            }
                        </a> */}



                    </div>





                </div>
                <div
                    className=' mr-1 mt-1 md:mt-0' >
                    <div className='relative bg-[#EBF8F9]  py-4 px-3 min-h-[24rem] rounded-md' data-aos="zoom-in" data-aos-duration="2000">
                        <h5 className='text-gray-700 text-lg text-center mt-14  font-bold font-[PlayfairDisplay]'>Call Us</h5>

                        <p className='absolute bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl left-[37%] -top-8'><MdPhoneAndroid /></p>

                        <a href='tel:+1516-367-2266' className='block mt-16 text-base text-center text-gray-600 '>
                            <span className=''>Phone:</span> <span className='hover:text-primary'>516-367-2266</span>

                        </a>
                        <a href='tel:+1516-367-1067' className='block mt-3 text-base text-center text-gray-600 '>
                            <span className=''> Fax:</span> <span className='hover:text-primary'>516-367-1067</span>


                        </a>

                        {/* <a href='#' className='text-[#00a6b2b1] flex justify-center items-center text-2xl gap-5 text-gray-600 '>
                            {
                                contact?.icons
                            }
                        </a> */}



                    </div>





                </div>
                <div
                    className=' mr-1 mt-1 md:mt-0' >
                    <div className='relative bg-[#EBF8F9]  py-4 px-3 min-h-[24rem] rounded-md' data-aos="zoom-in" data-aos-duration="2000">
                        <h5 className='text-gray-700 text-lg text-center mt-14  font-bold font-[PlayfairDisplay]'>Email Us</h5>

                        <p className='absolute bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl left-[37%] -top-8'><AiOutlineMail /></p>

                        <a href="mailto:info@cottagehomecare.com" className='block mt-16 text-base text-center text-gray-600 hover:text-primary'>
                        info@cottagehomecare.com

                        </a>
                        <a href="mailto:info@cottagehomecare.com" className='block mt-3 text-base text-center text-gray-600 hover:text-primary'>
                        info@cottagehomecare.com

                        </a>
                       

                        {/* <a href='#' className='text-[#00a6b2b1] flex justify-center items-center text-2xl gap-5 text-gray-600 '>
                            {
                                contact?.icons
                            }
                        </a> */}



                    </div>





                </div>
                <div
                    className=' mr-1 mt-1 md:mt-0' >
                    <div className='relative bg-[#EBF8F9]  py-4 px-3 min-h-[24rem] rounded-md' data-aos="zoom-in" data-aos-duration="2000">
                        <h5 className='text-gray-700 text-lg text-center mt-14  font-bold font-[PlayfairDisplay]'>Follow Us</h5>

                        <p className='absolute bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl left-[37%] -top-8'><RiUserFollowLine /></p>

                      
                       <div className='text-[#00a6b2b1] flex justify-center items-center text-2xl gap-5 mt-20' >
                       <a href='https://www.facebook.com/CottageHCS' target='_blank'>
                        
                       <FaFacebookF/>
                        </a>
                        <a href='https://twitter.com/cottagecareny' target='_blank' >
                        
                <AiOutlineTwitter />
              
                        </a>
                        <a href='' >
                       
               
                <ImInstagram />
                        </a>
                       </div>

                        



                    </div>





                </div>


            </div>

        </div>
    );
};

export default ContactInfo;
import React from 'react';

import { IoLocationOutline } from 'react-icons/io5';
import { MdPhoneAndroid} from 'react-icons/md';
import { AiOutlineMail} from 'react-icons/ai';
import { FaFacebookF} from 'react-icons/fa';
import { AiOutlineTwitter} from 'react-icons/ai';
import { ImInstagram} from 'react-icons/im';

const ContactInfo = () => {


    const contacts = [

        {
            icon: <IoLocationOutline/>,
            contactTitle: "Visit Us",
            contact1: "25 Newbridge Road, Suite 302, Hicksville, New York 11801, United States",
            contact2: "126-01 Liberty Avenue, South Richmond Hill Queens, New York 11419, United States",
            contact3: "391 East 149th Street, Bronx, New York 10455, United States"
        },
        {
            icon: <MdPhoneAndroid/>,
            contactTitle: "Call Us",
            contact1: "516-367-2266",
            contact2: "516-367-2266",
            
        },
        {
            icon: <AiOutlineMail/>,
            contactTitle: "Email Us",
            contact1: "info@cottagehomecare.com",
            contact2: "info@cottagehomecare.com",
            
        },
        {
            icon: <IoLocationOutline/>,
            contactTitle: "Follow Us",
            icons: [
                <FaFacebookF/>,
                <AiOutlineTwitter/>,
                <ImInstagram/>




            ]
            
        },



    ]


    return (
        <div className='my-16'>
            <div className='w-[95%] lg:w-[60%] mx-auto text-center'>
            <h1 className='font-[PlayfairDisplay] my-5 text-3xl font-semibold'>Cottage Home Care Services</h1>
            <p> Cottage Home Care Services is open to any feedback. Have questions? Unsure whether you can be covered by your insurance for Home Care Services? Need assessment? We would love to speak to you. Please call or email us! Thank you! </p>
            </div>


                <div className='w-[95%] lg:w-[85%] mx-auto md:grid grid-cols-4 mt-[100px] '>

                    {
                        contacts.map((contact,index)=><div
                        
                        key={index}

                        className=' mr-1 mt-1 md:mt-0'

                        
                        >
                            <div className='relative bg-[#EBF8F9]  py-4 px-3 min-h-[24rem] rounded-md bg-hov3'>
                                <h5 className='text-center mt-10  font-bold font-[PlayfairDisplay]'>{contact?.contactTitle}</h5>

                                <p className='absolute bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl left-[40%] -top-8'>{contact?.icon}</p>
                            </div>

                            



                        </div>)
                    }
                    

                </div>
           
        </div>
    );
};

export default ContactInfo;
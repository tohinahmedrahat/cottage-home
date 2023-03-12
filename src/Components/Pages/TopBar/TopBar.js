import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';

import { GrGooglePlus } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { TfiEmail} from 'react-icons/tfi';



const TopBar = () => {
    return (
       <div className='text-[#2E294E] hidden md:block'>
         <div className='roboto px-8 py-3 flex items-center justify-between'>
            <div className='flex gap-8'>
            <div className='flex gap-4 items-center md:text-lg font-medium'>
                <BsFillTelephoneFill/> 
                <p>
                    Call  <a href="tel:+1516-367-2266" className='text-primary '> 516-367-2266</a>
                </p>     

            </div>
            <div className='flex gap-4 items-center md:text-lg font-medium'>
                <TfiEmail/> 
                <p>
                    Email  <a href="mailto:info@cottagehomecare.com" className='text-primary '> info@cottagehomecare.com</a>
                </p>     

            </div>
            </div>         
            <div className='flex items-center gap-3 md:text-lg font-medium md:mr-[5%]'>
                {/* <Link>
                Careers
                </Link>
                <Link>
                Blog
                </Link>
                <Link>
                Make a Referral
                </Link> */}
                <GrGooglePlus className='md:text-2xl '/>
                <BsFacebook className='md:text-2xl '/>
                <AiFillInstagram className='md:text-2xl '/>



            </div>
           
           
        </div>
        <hr/>
       </div>
    );
};

export default TopBar;
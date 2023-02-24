import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';

import { GrGooglePlus } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { TfiEmail} from 'react-icons/tfi';
import { NavLink, useLocation, Link } from 'react-router-dom';


const TopBar = () => {
    return (
       <div className='text-[#2E294E] '>
         <div className='roboto px-8 py-3 md:flex items-center justify-between'>
            <div className='md:flex gap-8'>
            <div className='flex gap-4 items-center text-lg font-medium'>
                <BsFillTelephoneFill/> 
                <p>
                    Call  <a href="tel:+1516-367-2266" className='text-primary '> 516-367-2266</a>
                </p>     

            </div>
            <div className='flex gap-4 items-center text-lg font-medium'>
                <TfiEmail/> 
                <p>
                    Email  <a href="mailto:info@cottagehomecare.com" className='text-primary '> info@cottagehomecare.com</a>
                </p>     

            </div>
            </div>         
            <div className='flex items-center gap-3 text-lg font-medium md:mr-[5%]'>
                {/* <Link>
                Careers
                </Link>
                <Link>
                Blog
                </Link>
                <Link>
                Make a Referral
                </Link> */}
                <GrGooglePlus className='text-2xl '/>
                <BsFacebook className='text-2xl '/>
                <AiFillInstagram className='text-2xl '/>



            </div>
           
           
        </div>
        <hr/>
       </div>
    );
};

export default TopBar;
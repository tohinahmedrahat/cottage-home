import React from 'react';
import './Benifits.css'
import articleIMG from '../../../assets/articels-picture.jpg'


const Benefits = () => {
    return (
        <div className='w-[95%] lg:w-[70%] mx-auto mb-10'>
            <div className='  text-center  mb-10'>
                <div className='text-black'>
                    <h3 className='text-3xl font-semibold playrify   '  >Bring the Following Items</h3>
                    <hr className="border-[#00a6b2] border-t-2 w-12 mt-3 md:mb-8  mx-auto mb-5 " />
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans hover:bg-primary hover:text-white hover:border-white hover:transition duration-300' data-aos="zoom-in-up" data-aos-duration="500">
                        NY STATE HHA CERTIFICATE
                    </p>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans hover:bg-primary hover:text-white hover:border-white hover:transition duration-300' data-aos="zoom-in-up" data-aos-duration="1000">
                        VALID EMPLOYMENT ELIGIBILITY CARD
                    </p>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans hover:bg-primary hover:text-white hover:border-white hover:transition duration-300' data-aos="zoom-in-up" data-aos-duration="1500">
                        2 LETTERS OF REFERENCE
                    </p>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans hover:bg-primary hover:text-white hover:border-white hover:transition duration-300' data-aos="zoom-in-up" data-aos-duration="2000">
                        A PHOTO IDENTIFICATION CARD
                    </p>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans hover:bg-primary hover:text-white hover:border-white hover:transition duration-300' data-aos="zoom-in-up" data-aos-duration="2000">
                        CURRENT MEDICAL PHYSICAL
                    </p>

                </div>
              {/* <div>
              <div className='bg-[#D21E3E] mt-11' data-aos="zoom-in-up" data-aos-duration="1000">
                    <p className='text-center text-white p-6 text-3xl font-semibold' >
                    Cash Or Card Payment 
                    </p>
                </div>
                <div className=' mt-3 border-[1px] border-gray-400'data-aos="zoom-in-up" data-aos-duration="1000">
                  <div className='m-[2px] border-[1px] border-gray-400 p-4'>
                  <p className='text-center text-black text-3xl font-semibold'>TOP BENEFITS PAID</p>
                    <p className='text-center mt-3 bg-primary text-white px-3 py-2 text-2xl font-semibold'>Health Insurance, vacation, sick leave….</p>
                  </div>
                </div>
              </div> */}

            </div>
            <div className='md:grid grid-cols-5 mt-5 gap-5'>
                <div className='col-span-3 article-bg px-6 space-y-4 py-8'>
                <p className='text-center text-2xl text-primary font-semibold'>
                    DO NOT HAVE HHA/PCA CERTIFICATE??
                    </p>
                    <p className='text-center  text-black font-medium'>
                    NO WORRIES  
                    </p>
                    <p className='text-center bg-[#FF6347] p-2.5 text-white lg:text-xl md:text-base text-xs font-semibold lg:w-[500px] mx-auto'>
                    Join our CDPAP program and earn TOP dollars                        
                    </p>

                    <p className='text-center open-sans text-xl font-semibold'>
                    Consumer Directed Personal Assistance Program (CDPAP)
                    </p>

                </div>
                <div className='col-span-2 hidden md:block'>
                    <img src={articleIMG} className='w-full h-[260px]' alt="" />


                </div>
            </div>
        </div>
    );
};

export default Benefits;
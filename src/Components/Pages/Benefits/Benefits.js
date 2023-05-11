import React from 'react';
import './Benifits.css'
import articleIMG from '../../../assets/articels-picture.jpg'


const Benefits = () => {
    return (
        <div className='w-[95%] lg:w-[70%] mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                <div className='text-black'>
                    <h3 className='text-2xl font-semibold playrify  mb-3'>Bring the Following Items</h3>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans'>
                        NY STATE HHA CERTIFICATE
                    </p>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans'>
                        VALID EMPLOYMENT ELIGIBILITY CARD
                    </p>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans'>
                        2 LETTERS OF REFERENCE
                    </p>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans'>
                        A PHOTO IDENTIFICATION CARD
                    </p>
                    <p className='p-2 border-[1px] border-gray-400 mt-2 open-sans'>
                        CURRENT MEDICAL PHYSICAL
                    </p>

                </div>
              <div>
              <div className='bg-[#D21E3E] mt-11'>
                    <p className='text-center text-white p-6 text-3xl font-semibold'>
                    Cash Or Card Payment 
                    </p>
                </div>
                <div className=' mt-3 border-[1px] border-gray-400'>
                  <div className='m-[2px] border-[1px] border-gray-400 p-4'>
                  <p className='text-center text-black text-3xl font-semibold'>TOP BENEFITS PAID</p>
                    <p className='text-center mt-3 bg-primary text-white px-3 py-2 text-2xl font-semibold'>Health Insurance, vacation, sick leave….</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='md:grid grid-cols-5 mt-5 gap-5'>
                <div className='col-span-3 article-bg px-6 space-y-4 py-8'>
                <p className='text-center text-2xl text-primary font-semibold'>
                    DO NOT HAVE HHA/PCA CERTIFICATE??
                    </p>
                    <p className='text-center  text-black font-medium'>
                    NO WORRIES  
                    </p>
                    <p className='text-center bg-[#FF6347] p-2.5 text-white text-xl font-semibold w-[500px] mx-auto'>
                    Join our CDPAP program and earn TOP dollars                        
                    </p>

                    <p className='text-center open-sans text-xl font-semibold'>
                    Consumer Directed Personal Assistance Program (CDPAP)
                    </p>

                </div>
                <div className='col-span-2'>
                    <img src={articleIMG} className='w-[90%] h-[260px]' alt="" />


                </div>
            </div>
        </div>
    );
};

export default Benefits;
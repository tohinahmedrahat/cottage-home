import React from 'react';
import pic1 from '../../../src/assets/mission-vision/mission-vision.jpg'
import pic3 from '../../../src/assets/mission-vision/mission-vission-2.jpg'
import pic2 from '../../../src/assets/mission-vision/vission2.jpeg'
import pic4 from '../../../src/assets/mission-vision/vission3.jpeg'

const MissionVision = () => {
  window.scrollTo(0, 0);
  return (
    <div className='min-h-screen '>

      <div className='md:w-[85%] w-[95%] mx-auto mt-5 mb-20'>
        <h1 className='text-center my-5 playrify font-semibold text-primary md:text-3xl text-2xl'> Mission And Vision Of Cottage Care </h1>
        <div className='md:grid grid-cols-8  gap-8 items-center'>
          <div className='md:col-span-4 lg:col-span-2 text-gray-600 mt-5'>
            <p className='text-justify'>
              Our mission is to provide personalized, compassionate, and high-quality home care services that enable our patients to maintain their independence and improve their overall health and well-being.
            </p>


            <p className='text-justify mt-3'>
              We strive to deliver individualized care plans tailored to each patient's unique needs and preferences. We are also committed to establishing lasting bonds of respect, confidence, and open communication with our patients and their families.
            </p>

          </div>
          <div className='lg:col-span-2 md:col-span-4  mt-5 '>

            <img src={pic1} alt="" className='w-full md:h-96' />

          </div>
          <div className='col-span-4 mt-5 hidden lg:block'>
            <img src={pic2} alt="" className='w-full md:h-96' />

          </div>

        </div>

        <div className='md:grid grid-cols-8  gap-8 items-center mt-3'>
          <div className='col-span-4 mt-5 hidden lg:block'>
            <img src={pic4} alt="" className='w-full md:h-96' />

          </div>
          <div className='lg:col-span-2 md:col-span-4  mt-5 '>

            <img src={pic3} alt="" className='w-full md:h-96' />

          </div>
          <div className='md:col-span-4 lg:col-span-2 text-gray-600 mt-5'>
            <p className='text-justify'>
            Our team of highly qualified and dedicated caregivers is passionate about improving the lives of those we serve. Cottage Home Care Services is committed to delivering exceptional care with dignity, integrity, and professionalism.
            </p>


            

          </div>



        </div>

      </div>





    </div>
  );
};

export default MissionVision;
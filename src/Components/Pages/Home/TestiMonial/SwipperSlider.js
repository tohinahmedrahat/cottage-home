import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, A11y } from "swiper";
import img1 from '../../../../assets/Sherry_Ann_Fiedtkou.jpg';
import img2 from '../../../../../src/assets/Cinthya_Almendarez.jpg';
import img3 from '../../../../../src/assets/Natividad_Mateo_Fernandes.jpg';
import icon from '../../../../../src/assets/blue-quote.jpg'
import { SwiperNavButtons } from "../../Services/Services/SwiperNavButtons";



export default function Slider() {



    const Slider = [

        {
            image: img2,
            name: "Cinthya Almendarez",
            prev: 1,
            id: 2,
            description: " Cottage home care is a spectacular agency with a great work environment. I can call any hour and there is always someone on the phone who will answer me and provide the help I need. The staff is friendly and they will go above and beyond to help you with whatever you need. I highly recommend that everyone joins the Cottage home care family.",
            next: 3
        },
        {
            image: img1,
            name: "Sherry Fiedtkou",
            prev: 3,
            id: 1,
            description: "I'm having the best experience working with Cottage Home Care. The staff and management is exceptional because I've been working in the Home care for 17 years and this is one of the best agencies. My pay is always on time so I'm never worried and I'm able to reach all my obligations.",
            next: 2
        },
        {
            image: img3,
            name: "Natividad Mateo",
            prev: 2,
            id: 3,
            description: "Excellent customer service and employee service, always with a smile.Staff is caring and loving and receptive to your needs. Great home care agency to sign up with for work, or to receive Homecare services at home.",
            next: 1
        }

    ]
    return (
        <>
            {/* <Swiper
                modules={[Navigation, Pagination, A11y, ]}
                pagination={ true}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }} */}
                <Swiper
                modules={[Navigation, Pagination, A11y,Autoplay]}
                pagination={ true}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                   delay: 3500,
                   disableOnInteraction: false,
               }}
             
               className="mySwiper relative "
          

               
            //     slidesPerView="auto"
            //     loop={true}
            //     autoplay={{
            //        delay: 3500,
            //        disableOnInteraction: false,
            //    }}

                
            >
                {
                    Slider.map(slide => <SwiperSlide

                    >
                        <div className=" md:relative w-full pt-[150px]">
                            <div className='md:grid grid-cols-8  '>
                                <div className='col-span-2 md:-mt-[80px] '
                               >
                                    <div className='md:absolute  lg:left-[10%] '>
                                        <img src={slide.image} className='w-full h-96 rounded-md border-2 border-primary' alt="" />
                                    </div>
                                </div>
                                <div className='col-span-6 bg-[#EBF8F9] py-6 md:h-[400px] rounded-md px-4'
                                 >
                                    <div className=' md:w-[60%] lg:mx-auto md:ml-[30%]  '>
                                        <img src={icon} alt="" />
                                        <p className='text-justify italic mt-4 text-[#67637E]'>{'“' + slide.description + '”'} </p>

                                        <p className='mt-8 text-lg text-gray-700 font-semibold'>{slide.name} </p>
                                    </div>


                                </div>

                            </div>

                        </div>



                    </SwiperSlide>)
                }



                <div className=" absolute bottom-10 left-1/2  z-50">
                    <SwiperNavButtons />
                </div>
            </Swiper>
        </>
    );
}
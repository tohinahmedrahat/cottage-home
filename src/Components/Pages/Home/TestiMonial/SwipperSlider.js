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
import icon1 from '../../../../../src/assets/blue-quote-removebg-preview.png'
import person1 from '../../../../../src/assets/testimonial/Cinthyaz.jpg'
import person2 from '../../../../../src/assets/testimonial/Natividad.jpg'
import person3 from '../../../../../src/assets/testimonial/Sherry.jpg'
import { SwiperNavButtons } from "../../Services/Services/SwiperNavButtons";



export default function Slider() {



    const Slider = [

        {
            image: img2,
            img2: person1,
            name: "Cinthya Almendarez",
            prev: 1,
            id: 2,
            description: " Cottage home care is a spectacular agency with a great work environment. I can call any hour and there is always someone on the phone who will answer me and provide the help I need. The staff is friendly and they will go above and beyond to help you with whatever you need. I highly recommend that everyone joins the Cottage home care family.",
            next: 3
        },
        {
            image: img1,
            img2: person3,
            name: "Sherry Fiedtkou",
            prev: 3,
            id: 1,
            description: "I'm having the best experience working with Cottage Home Care. The staff and management is exceptional because I've been working in the Home care for 17 years and this is one of the best agencies. My pay is always on time so I'm never worried and I'm able to reach all my obligations.",
            next: 2
        },
        {
            image: img3,
            img2: person2,
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
                        
                        {/* mobile device start  */}

                        <div   
                                    className=" relative mt-16 md:mb-10  mb-10   bg-white lg:min-h-[18rem]   rounded-md  md:hidden pt-14 md:pt-0 w-[95%] mx-auto
                                
                                "
                                    data-aos="zoom-in"
                                    data-aos-duration="2000"
                                >




                                    <div className="rounded overflow-hidden border-[1px] shadow-xl "

                                    >
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src={slide?.img2} alt className="rounded-full object-cover h-full w-full shadow-md" loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <div className="font-bold text-2xl text-center pb-1">{slide?.name}</div>
                                            
                                            <img src={icon1} alt="" className="w-12 h-12 mt-2" />

                                            <p className="text-justify text-gray-600 text-base pt-1 font-normal">{slide?.description}</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">                              
                                            </div>

                                          
                                        </div>
                                    </div>
                                </div>
                        


                        {/* mobile device end  */}

                        <div className=" md:relative w-full pt-[150px] hidden md:block">
                            <div className='md:grid grid-cols-8  '>
                                <div className='col-span-2 md:-mt-[80px] '
                               >
                                    <div className='md:absolute  lg:left-[10%] '>
                                        <img src={slide.image} className='w-full h-[450px] md:h-96 rounded-md md:border-[1.5px] border-0 border-primary shadow-md' alt="" />
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



                <div className=" absolute bottom-10 left-1/2  z-50 hidden md:block">
                    <SwiperNavButtons />
                </div>
            </Swiper>
        </>
    );
}
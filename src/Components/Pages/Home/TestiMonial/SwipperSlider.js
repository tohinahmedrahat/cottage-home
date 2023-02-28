import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, A11y } from "swiper";
import img1 from '../../../../assets/david-arristia.png';
import img2 from '../../../../../src/assets/about3.jpg';
import img3 from '../../../../../src/assets/JuanMiranda.png';
import icon from '../../../../../src/assets/blue-quote.jpg'
import { SwiperNavButtons } from "../../Services/Services/SwiperNavButtons";



export default function Slider() {



    const Slider = [

        {
            image: img2,
            name: "Jaswinder",
            prev: 1,
            id: 2,
            description: "I didn’t know what to do about my health issues. I found that this team was just who I was looking for. They are friendly, professional, and they really care. I love my home care services with them. Best home health care in the area!",
            next: 3
        },
        {
            image: img1,
            name: "Rahul",
            prev: 3,
            id: 1,
            description: "“I do CDPAP with this agency. Amazing care, response, and commitment towards keeping my father happy, healthy, and safe!.",
            next: 2
        },
        {
            image: img3,
            name: "Murry",
            prev: 2,
            id: 3,
            description: "If you are looking for some compassionate, caring people, this is the team I highly recommend. They took great care of my mom with Dementia, the aide they sent was a blessing! Cottage Home Care Services were a life saver! Now I do CDPAP for my mother still with this agency as I have more time.",
            next: 1
        }

    ]
    return (
        <>
        {/* Autoplay */}
            <Swiper
                modules={[Navigation, Pagination, A11y, ]}

                slidesPerView="auto"
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}

                className="mySwiper relative "
            >
                {
                    Slider.map(slide => <SwiperSlide

                    >
                        <div className="carousel-item md:relative w-full pt-[150px]">
                            <div className='md:grid grid-cols-8  '>
                                <div className='col-span-2 md:-mt-[80px] '>
                                    <div className='lg:absolute  left-[10%] '>
                                        <img src={slide.image} className='w-full h-96 rounded-md' alt="" />
                                    </div>
                                </div>
                                <div className='col-span-6 bg-[#EBF8F9] py-6 md:h-[400px] rounded-md  '>
                                    <div className='w-[60%] mx-auto '>
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
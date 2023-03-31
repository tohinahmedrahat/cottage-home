import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hhhaImage1 from "../../../assets/hhamain.png"
import hhhaImage2 from "../../../assets/img1.png";
import hhhaImage3 from "../../../assets/img2.png";
import hhhaImage4 from "../../../assets/img3.png";

import { Pagination, Navigation, Autoplay, A11y } from "swiper";
import { SliderButton } from "../Services/Services/SliderButton/SliderButton";



const images = [
   
   
    {
        img:hhhaImage1,
    },
    {
        img:hhhaImage2,
    },
    {
        img:hhhaImage3,
    },
    {
        img:hhhaImage4,
    },
]


export default function Slider() {
    return (
        <>
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
            >  
            {
                images.map((slider,index)=> <SwiperSlide
                
                key={index}
                >
                    <div
                        className="md:h-72 h-56 lg:h-96 xl:h-112 2xl:h-128 bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${slider.img})`,
                        }}
                    >
                    </div>
                   




                </SwiperSlide>)
            }
                
                <div className=" absolute bottom-5 left-[60%] lg:left-[80%]  z-50">
                <SliderButton></SliderButton>
                </div>
            </Swiper>
        </>
    );
}
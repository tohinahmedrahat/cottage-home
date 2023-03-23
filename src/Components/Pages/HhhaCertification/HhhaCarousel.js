import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './Carousel.css'
// import hhhaImage from "../../../assets/hha cover .jpg";
// import hhhaImage2 from "../../../assets/img1.png";
// import hhhaImage3 from "../../../assets/img2.png";
// import hhhaImage4 from "../../../assets/img3.png";

import { Pagination, Navigation, Autoplay, A11y } from "swiper";
import { Link } from "react-router-dom";
import { SliderButton } from "../Services/Services/SliderButton/SliderButton";



const images = [
    {
        img:'https://i.ibb.co/GPW9xSZ/hha-cover.png',
    },
    {
        img:'https://i.ibb.co/pbxSx7r/img1.png',
    },
    {
        img:'https://i.ibb.co/rp75FzJ/img2.png',
    },
    {
        img:'https://i.ibb.co/xHHnQsJ/img3.png',
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
                        className="lg:h-[500px] h-96 bg-cover bg-center bg-no-repeat text-white rounded-xl  "
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
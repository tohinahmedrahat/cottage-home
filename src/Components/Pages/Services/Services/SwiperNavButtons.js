import React from 'react';
import { useSwiper } from 'swiper/react';
import { AiOutlineArrowRight} from 'react-icons/ai';
import { AiOutlineArrowLeft} from 'react-icons/ai';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex gap-8 text-white font-bold">
      <button onClick={() => swiper.slidePrev()} className='px-5 py-3 shadow-md rounded-md bg-primary text-white text-lg font-semibold'><AiOutlineArrowLeft/></button>
      <button onClick={() => swiper.slideNext()} className='px-5 py-3 shadow-md rounded-md bg-primary text-white text-lg font-semibold'><AiOutlineArrowRight/></button>
    </div>
  );
};
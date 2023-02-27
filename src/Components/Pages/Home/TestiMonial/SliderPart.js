import React from 'react';
// import './BannerItem.css';
import { AiOutlineArrowRight} from 'react-icons/ai';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import icon from '../../../../assets/blue-quote.jpg'

const SliderPart = ({slide}) => {

    
    const {image, id, prev, next,description,name} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item md:relative w-full pt-[150px]">
              <div className='md:grid grid-cols-8  '>
                <div className='col-span-2 md:-mt-[80px] '>
                    <div className='lg:absolute  left-[10%] '>
                    <img src={image} className='w-full h-96 rounded-md' alt="" />
                    </div>
                </div>
                <div className='col-span-6 bg-[#EBF8F9] py-6 md:h-[400px] rounded-md  '>
                    <div className='w-[60%] mx-auto '>
                    <img src={icon} alt="" />
                    <p className='text-justify italic mt-4 text-[#67637E]'>{'“' + description+'”'} </p>

                    <p className='mt-8 text-lg text-gray-700 font-semibold'>{name} </p>
                    </div>

                    <div className="pt-16 md:pt-0 md:absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-3">
                    <a   href={`#slide${prev}`} className="px-5 py-3 shadow-md rounded-md bg-primary mr-5 text-white text-lg font-semibold"><AiOutlineArrowLeft/></a>
                    <a  href={`#slide${next}`} className="px-5 py-3 shadow-md rounded-md bg-primary text-white text-lg font-semibold"><AiOutlineArrowRight/></a>
                </div>
                </div>

              </div>
               
            </div>
    );
};

export default SliderPart;
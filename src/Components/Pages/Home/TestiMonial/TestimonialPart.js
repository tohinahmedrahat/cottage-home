import React from 'react';
import img1 from '../../../../assets/david-arristia.png';
import img2 from '../../../../assets/about3.jpg';
import img3 from '../../../../assets/JuanMiranda.png';
import SliderPart from './SliderPart';




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

const TestimonialPart = () => {
    return (
        <div className=' w-[95%] md:w-[90%] mx-auto py-10'>
            <div className='flex justify-center'>
            <h1 className='w-[40%] text-3xl playrify font-semibold text-center '>Testimonials From Our Patients and Their Loved Ones</h1>
            </div>
            <div className='flex justify-center'>
               <hr  className='bg-primary px-5 mt-2 py-[1px] w-[220px]'/>
               </div>
            <div className="carousel ">

                {
                    Slider.map(slide => <SliderPart
                        key={slide.id}
                        slide={slide}
                    ></SliderPart>)
                }
            </div>
        </div>



    );
};

export default TestimonialPart;
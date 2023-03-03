
import React, { useContext, useState } from 'react';
import { AiOutlineArrowRight} from 'react-icons/ai';
import Modal from '../ContactInfo/Modal/Modal';

const OfficeLocation = () => {


 
    const [ office, setOffice] = useState('')

    const officeHandler = (office)=>{

        setOffice(office)

    }


    const offices = [
        {
            name: 'Long Island Office',
            address1:'25 Newbridge Road, Suite 302 Hicksville,',
            address2:'New York 11801, United States.',
            direction:'https://www.google.com/maps/dir//25+Newbridge+Rd+Unit+302,+Oyster+Bay,+NY+11801/@40.7680687,-73.5969743,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c280e280b85923:0x6d08773ea58e3908!2m2!1d-73.5269344!2d40.7680899'
        },
        {
            name: 'Queens office',
            address1:'126-01 Liberty Avenue, South Richmond Hill Queens,',
            address2:'New York 11419, United States',
            direction:'https://www.google.com/maps?daddr=126-01+Liberty+Avenue,+South+Richmond+Hill+Queens,+New+York+11419,+United+States'
        },
        {
            name: 'Bronx Office',
            address1:'391 East 149th Street, Bronx,',
            address2:'New York 10455, United States.',
            direction:'https://www.google.com/maps?daddr=391+East+149th+Street,+Bronx,+New+York+10455,+United+States'
        },
    ]


    return (
        <div className='bg-[#322E51] py-24 '>
            
            <div className='w-[95%] lg:w-[80%] mx-auto'>
            <h1 className='text-lg md:text-2xl lg:text-4xl playrify text-white  font-semibold'>Call today or come visit — at a location near you.</h1>
            <hr className='border-t-[.5px] border-primary mt-5 w-[80px]' />


            <h5 className='md:text-xl text-lg text-primary mt-5 font-semibold'> Cottage Home Care Services of New York Office Locations </h5>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16 text-center md:text-start'>
                {
                    offices.map((office,index)=><div 
                    
                    key={index}
                    >
                    <h5 className='text-lg font-semibold text-primary'>{office?.name}</h5>
                    <p className='text-white'>{office?.address1}</p>
                    <p className='text-white'>{office?.address2}</p>

                    <a href={office?.direction} target='_blank'  className='uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-primary'> <AiOutlineArrowRight/> Get Direction</a>
                    <div className='mt-5'>
                    <label
                    
                    onClick={()=>officeHandler(office)}
                    htmlFor="booking-modal" className='bg-primary px-4 py-3 rounded-md shadow-md text-white text-sm  cursor-pointer '> Contact the {office.name}</label>
                    </div>
                    

                </div>)
                }
                {/* <div >
                    <h5 className='text-lg font-semibold text-primary'>Long Island Office</h5>
                    <p className='text-white'>25 Newbridge Road, Suite 302 Hicksville,</p>
                    <p className='text-white'>New York 11801, United States.</p>

                    <a href="https://www.google.com/maps/dir//25+Newbridge+Rd+Unit+302,+Oyster+Bay,+NY+11801/@40.7680687,-73.5969743,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c280e280b85923:0x6d08773ea58e3908!2m2!1d-73.5269344!2d40.7680899" target='_blank'  className='uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-primary'> <AiOutlineArrowRight/> Get Direction</a>
                    <button className='bg-primary px-4 py-3 rounded-md shadow-md text-white text-sm  mt-4 upre'> Contact the Log Island Office </button>

                </div>
                <div>
                    <h5 className='text-lg font-semibold text-primary'>Queens office</h5>
                    <p className='text-white'>126-01 Liberty Avenue, South Richmond Hill Queens, </p>
                    <p className='text-white'>New York 11419, United States</p>

                    <a href="https://www.google.com/maps?daddr=126-01+Liberty+Avenue,+South+Richmond+Hill+Queens,+New+York+11419,+United+States" target='_blank'  className='uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-primary'> <AiOutlineArrowRight/> Get Direction</a>

                </div>
                <div>
                    <h5 className='text-lg font-semibold text-primary'> Bronx Office</h5>
                    <p className='text-white'>391 East 149th Street, Bronx,</p>
                    <p className='text-white'> New York 10455, United States.</p>

                    <a href="https://www.google.com/maps?daddr=391+East+149th+Street,+Bronx,+New+York+10455,+United+States" target='_blank'  className='uppercase text-sm text-white flex  items-center mt-3 flex justify-center md:justify-start  hover:text-primary'> <AiOutlineArrowRight/> Get Direction</a>

                </div> */}
                

            </div>
            <Modal

            office={office}


        
            ></Modal>

            </div>
            
        </div>
    );
};

export default OfficeLocation;
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import './HhhaContact.css'

const HhhaContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } =
     useForm();
     const date = Date.now();   
    
    const hhaSubmitHandler = (data)=>{

        // console.log(data)
        const brooklynMessage = {
            name : data?.fullName ,
            email: data?.email,
            message: data?.subject,
            time:date
        }
   
        console.log(brooklynMessage)

        fetch('https://cottage-home-care-services-server-site.vercel.app/brooklyn', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brooklynMessage)
        })
            .then(res => res.json())
            .then(data => {
            //    console.log(data)
                if (data.acknowledged) {
                    toast.success('Message Send Successfully')
                   reset()
                    
                }

            })


    }


    return (
        <div className='contact-container border-t-2 border-white'>
            <div className='w-[80%] mx-auto bg-[#F4F4F4] opacity-90    
            lg:my-[50px] contact-adjustment lg rounded-md shadow-lg my-10'
            data-aos="fade-up" data-aos-duration="2000">
                <div>
                <div>
                    <h1 className='text-3xl font-bold playrify text-center pt-10'>Brooklyn Institute Of Vocational Training</h1>
                    <hr className='border-[#00a6b2] border-t-2 w-12 mt-3  mx-auto' />
                </div>
                <div className='my-8 '>


                    <section className="flex justify-center items-center pb-8 mt-3 mb-12 rounded w-[95%]  md:w-[90%] mx-auto ">
                        <div className="w-full">

                            <form
                            
                             onSubmit={handleSubmit(hhaSubmitHandler)}
                                className="max-w-xl md:max-w-2xl mx-auto"
                            >

                                <h1 className='text-2xl text-start'> Contact Our School</h1>




                                <div className="space-y-1  mt-5 text-sm">
                                    
                                    <input
                                        type="text"

                                        // defaultValue={user?.displayName}
                                        // readOnly


                                        {...register("fullName",
                                            { required: "Name is required" })}
                                        id="fullName"
                                        placeholder='Full Name'
                                        className="w-full px-4 py-4 placeholder-gray-600 rounded-md border border-[#00a6b265] text-gray-700 outline-[#00a6b265] bg-white
                                        focus:bg-white"
                                    />

                                    {errors.fullName && <p className='text-red-600'>{errors.fullName.message}</p>}

                                </div>


                                <div className="space-y-1 mt-5  text-sm">
                                    
                                    <input
                                        type="email"
                                        {...register("email",
                                            { required: "Email is required" })}
                                        // defaultValue={user?.email}


                                        id="email"
                                        // readOnly
                                        placeholder='E-mail '
                                        className="w-full placeholder-gray-600 px-4 py-4 rounded-md border border-[#00a6b265] text-gray-700 outline-[#00a6b265] bg-white
                                        focus:bg-white"
                                    />
                                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                                </div>

                                <div className="space-y-1 text-sm  mt-5">
                                   
                                    <textarea
                                        type="text"
                                        {...register("subject",
                                            { required: "Subject is required" })}

                                        // name="subject"
                                        id="subject"
                                        rows={5}
                                        placeholder="Subject"
                                        className="w-full px-4 py-4 border border-[#00a6b265] placeholder-gray-600 text-gray-700 outline-[#00a6b265] bg-white
                                        focus:bg-white"
                                    />
                                    {errors.subject && <p className='text-red-600'>{errors.subject.message}</p>}

                                </div>
                                <button className="block w-full p-3 text-center rounded-sm  bg-primary hover:bg-secondary text-white mt-6">
                                    Send
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
                </div>

            </div>






        </div>
    );
};

export default HhhaContactForm;
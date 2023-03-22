import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { IoCaretBack } from 'react-icons/io5';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useQuery } from 'react-query';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import logo from '../../../src/assets/Cottage Home.png'

const SingleBlog = () => {
    // window.scrollTo(0, 0);
    const blog = useLoaderData();
    const navigate = useNavigate();
    const { title, img, date, description, _id } = blog
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const newDate = Date.now();


    const url = `http://localhost:5000/comments/${_id}`

    const { data: comments = [], isLoading, refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })


    const goBack = () => {
        navigate(-1);
    }

    const commentHandler = (data) => {



        const comment = {

            name: data?.fullName,
            email: data?.email,
            message: data?.comment,
            date: newDate,
            id: _id,



        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                //    console.log(data)
                if (data.acknowledged) {
                    toast.success('Comment Send Successfully')
                    reset()
                    refetch()

                }

            })
        console.log(comment)


    }

    console.log(comments)

    return (
        <div className='min-h-screen '>
            <div className='w-[95%] lg:w-[85%] md:w-[90%] mx-auto'>

                <div className='md:grid grid-cols-8 gap-7 mb-20 source-sans'>

                    <div className='lg:col-span-5 md:col-span-4'>
                        <p
                            onClick={goBack}
                            className='flex items-center gap-1 mt-10 cursor-pointer text-primary font-semibold'> <IoArrowBackOutline className='font-bold' /> All Post</p>
                        <p className='text-center  font-semibold source-sans'> <i className='text-sm'>in</i> <span className='text-xs ml-1 text-primary '>Cottage Home Care Services</span> </p>
                        <h3 className='playrify text-2xl font-semibold text-center mt-3'> {blog?.title}
                        </h3>
                        <p className='mt-3 text-center text-sm text-[#8c8a98] open-sans font-medium '>

                            {blog?.date}

                        </p>

                        <div className='mt-10'>
                            <img src={blog?.img} alt="" className='w-full lg:h-[80vh] md:h-[40vh] ' />
                        </div>

                        <div className='mt-10 '>
                            {
                                description.map((des, index) => <div
                                    key={index}

                                    className='mt-5'
                                >
                                    <h3 className='text-xl playrify  font-medium'>
                                        {des?.sub_title}
                                    </h3>

                                    <p className='text-justify mt-1.5 text-[#6c6262]'>
                                        {
                                            des?.content
                                        }

                                    </p>



                                </div>)

                            }
                            <div className='mt-8 grid grid-cols-5 items-center'>
                                <div className='col-span-2'>
                                    <hr className=' border-t-[1px]' />
                                </div>
                                <div>
                                    <p className='font-semibold text-center uppercase'> <span className='text-red-400 mr-1.5'>{comments?.length}</span  >comments </p>
                                </div>

                                <div className='col-span-2'>
                                    <hr className=' border-t-[1px]' />
                                </div>
                            </div>

                            {/* all comments  */}

                            <div className='pt-2'>
                                {

                                    comments.map(comment => <div

                                        key={comment?._id}
                                        

                                    >



                                        <div className='mt-5 text-[#6c6262] my-5 border-[1px] rounded p-5  border-primary '>
                                            <p className='mb-1 text-red-400 '>
                                                {
                                                 new Date(comment?.date).toLocaleString()
                                                }
                                            </p>
                                            <div className='flex items-center justify-between'>
                                                <div >
                                                <h1 className='text-lg font-medium'>{comment?.name}</h1>
                                                </div>
                                                <div>

                                                    <i className='text-sm'>
                                                        {
                                                          comment?.email  
                                                        }
                                                    </i>
                                                    
                                                </div>
                                            </div>
                                          
                                            <p className='mt-2 md:w-10/12 '> <span className='mr-2'>Message:</span>  {comment?.message}</p>
                                        </div>


                                    </div>)

                                }

                            </div>

                        </div>
                    </div>

                    <div className='lg:col-span-3 md:col-span-4 mt-[5vh]'>

                        <div className='border-[1.5px] min-h-[30rem] lg:w-[90%] w-[95%] mx-auto border-t-primary '>

                            <p className='text-center font-semibold py-3 border-b-[1.5px] text-sm'>
                                ABOUT
                            </p>

                            <div className='w-[70%] mx-auto bg-[#EBF8F9] mt-8 py-8 rounded-md'>
                                <div className='flex justify-center'>
                                    <img src={logo} alt="" className='w-[50%] h-[50%]' />
                                </div>



                            </div>
                            <div className='mx-auto px-2 text-lg mt-3 text-center w-[80%] text-[#6c6262] '>
                                <p className='font-medium'>
                                    Cottage Home Care Services.
                                    516.367.2266.
                                    The Right Home Care for You .
                                    PCA & CDPAP Services throughout New York City
                                </p>
                            </div>

                            <div className='text-center mt-4'>
                                <Link

                                    to='/home'

                                >

                                    <button className='bg-gray-50 px-3 py-3 shadow-md text-lg text-primary uppercase font-semibold bg-hov2'>
                                        Read More

                                    </button>

                                </Link>
                            </div>

                        </div>


                        <div className='mt-14 border-[1.5px]  lg:w-[90%] w-[95%] mx-auto border-t-primary bg-[#f2f4f6de] py-3 pb-14'>

                            <p className='text-center font-semibold mt-8  text-lg aftereffect'>
                                COMMENT SECTION
                            </p>
                            <hr className="border-[#00a6b2] border-t-[1.5px] w-12 mt-1 mx-auto" />


                            <div className='w-[90%] mx-auto mt-10'>
                                <form

                                    onSubmit={handleSubmit(commentHandler)}

                                >

                                    <div className='space-y-3'>

                                        <div>
                                            <input
                                                type="text"

                                                {...register("fullName",
                                                    { required: "FullName is required" })}

                                                id='fullName'
                                                placeholder="Your Name" className="input w-full focus:outline-none input-bordered input-primary" />
                                            {errors.fullName && <p className='text-red-600'>{errors.fullName.message}</p>}

                                        </div>

                                        <div>
                                            <input type="email"
                                                {...register("email",
                                                    { required: "email is required" })}


                                                placeholder="Your Email" className="input w-full focus:outline-none  input-bordered input-primary" />

                                            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

                                        </div>

                                        <div>
                                            <textarea
                                                type='text'
                                                {...register("comment",
                                                    { required: "Message is required" })}


                                                className="textarea 
                                     textarea-primary w-full focus:outline-none " placeholder="Your Message"></textarea>

                                            {errors.comment && <p className='text-red-600'>{errors.comment.message}</p>}

                                        </div>


                                        <button className="input w-full focus:outline-none  bg-primary hover:bg-secondary text-white uppercase text-lg font-medium" > Submit

                                        </button>
                                    </div>
                                </form>
                            </div>




                        </div>




                    </div>
                </div>

            </div>


        </div>
    );
};

export default SingleBlog;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const BlogForm = () => {

    const [loading, setLoading] = useState(null);
    const date = Date.now();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    

    const submitHandler = (data) => {
        setLoading(true)
        console.log(data)
        // console.log(data)
        const image = data.url[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url)
                if (imgData.success) {

                    const blog = {
                        title: data?.title,
                        newDate: date,
                        img: imgData.data.url,
                        description: [
                            {
                                sub_title: data?.title1,
                                content: data?.description1,
                            },
                            {
                                sub_title: data?.title2,
                                content: data?.description2,
                            },
                            {
                                sub_title: data?.title3,
                                content: data?.description3,
                            },
                        ]
            
            
                    }
                    

                    fetch("http://localhost:5000/blogs", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(blog),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            setLoading(false)
                            if (data.acknowledged) {
                                toast.success("Blog Added SuccessFully")
                                reset();
                                navigate('/blog')
                            }
                        });


                }


            })



    };
    return (
        <div className="pt-5 contact-bg" id="contact-form">
            {
                loading && 
                <div className='my-5'>
                    
                    <Loading></Loading>

                </div>
            }
            <section className="flex justify-center items-center pb-8 mt-3 mb-12 rounded w-11/12  md:w-[80%] mx-auto">
                <div
                    className="w-full  "
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <form


                        onSubmit={handleSubmit(submitHandler)}
                        className="max-w-xl md:max-w-3xl   ml-auto bg-gray-50 p-8 rounded-md shadow-xl "
                    >
                        <h1 className="text-2xl text-gray-600 text-center Poppins font-semibold">
                            {" "}
                            Add A Blog
                        </h1>

                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div className="space-y-0.5   text-sm">
                                <label htmlFor="firstName" className="block dark:text-gray-400">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    {...register("title", { required: "Title is required" })}
                                    id="Title"
                                    placeholder="Title"
                                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                          focus:bg-white shadow-md"
                                />

                                {errors.title && (
                                    <p className="text-red-600">{errors.title.message}</p>
                                )}
                            </div>

                            {/* <div className="space-y-0.5 text-sm">
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex items-center px-3 py-2 mx-auto mt-6 text-center border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                            focus:bg-white shadow-md cursor-pointer "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-300 dark:text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                        />
                                    </svg>

                                    <h2 className="mx-3 text-gray-400">Select A Picture</h2>

                                    <input
                                        {...register("url", {
                                            required: "Image is required",
                                        })}
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"

                                    />
                                </label>
                                {errors.url && <p className='text-red-600'>{errors.url.message}</p>}
                            </div> */}
                            <div className="space-y-0.5 text-sm">
                            <div className='flex items-center gap-4'>
                            <label htmlFor="firstName" className="block dark:text-gray-400">
                                   Image
                                </label>
                                
                            <small className='text-red-500'>[ Image should not be large then 200 KB ] </small>
                            </div>

                            <input type="file"
                            
                            {...register("url", {
                                required: "Image is required",
                            })}
                            className="file-input file-input-secondary border-0  w-full  text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md" />
                                
                                {errors.url && <p className='text-red-600'>{errors.url.message}</p>}
                            </div>

                            



                        </div>

                        <hr className="my-3" />

                        <div className="space-y-0.5   text-sm">
                            <input
                                type="text"
                                {...register("title1")}
                                id="Title1"
                                placeholder="Paragraph Title-1"
                                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md"
                            />

                            {errors.title1 && (
                                <p className="text-red-600">{errors.title1.message}</p>
                            )}
                        </div>

                        <div className="space-y-0.5 text-sm  mt-5">

                            <textarea
                                type="text"
                                {...register("description1", { required: "Description is required" })}
                                // name="subject"
                                id="description1"
                                rows={5}
                                placeholder="Paragraph-1 Description"
                                className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                      focus:bg-white shadow-md"
                            />
                            {errors.description1 && (
                                <p className="text-red-600">{errors.description1.message}</p>
                            )}
                        </div>
                        <hr className="my-3" />

                        <div className="space-y-0.5   text-sm">
                            <input
                                type="text"
                                {...register("title2")}
                                id="Title2"
                                placeholder="Paragraph Title-2"
                                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md"
                            />

                            {errors.title2 && (
                                <p className="text-red-600">{errors.title2.message}</p>
                            )}
                        </div>

                        <div className="space-y-0.5 text-sm  mt-5">

                            <textarea
                                type="text"
                                {...register("description2", { required: "Description is required" })}
                                // name="subject"
                                id="description2"
                                rows={5}
                                placeholder="Paragraph-2 Description"
                                className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                      focus:bg-white shadow-md"
                            />
                            {errors.description2 && (
                                <p className="text-red-600">{errors.description2.message}</p>
                            )}
                        </div>
                        <hr className="my-3" />


                        <div className="space-y-0.5   text-sm">
                            <input
                                type="text"
                                {...register("title3")}
                                id="Title3"
                                placeholder="Paragraph Title-3"
                                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md"
                            />

                            {errors.title3 && (
                                <p className="text-red-600">{errors.title3.message}</p>
                            )}
                        </div>

                        <div className="space-y-0.5 text-sm  mt-5">

                            <textarea
                                type="text"
                                {...register("description3", { required: "Description is required" })}
                                // name="subject"
                                id="description3"
                                rows={5}
                                placeholder="Paragraph-3 Description"
                                className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                      focus:bg-white shadow-md"
                            />
                            {errors.description3 && (
                                <p className="text-red-600">{errors.description3.message}</p>
                            )}
                        </div>
                        <hr className="my-3" />
                        <button className="block w-full p-3 text-center rounded-sm  bg-primary hover:bg-secondary text-white mt-6">
                            Upload
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BlogForm;
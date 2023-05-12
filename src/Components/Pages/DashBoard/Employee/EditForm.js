import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';



const EditForm = () => {

    const employee = useLoaderData()
    console.log(employee)

    const [loading, setLoading] = useState(null);
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

        // console.log(data?.url?.length)

        if (data?.url?.length > 0) {
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

                        const updateEmployee = {
                            _id: employee?._id,
                            name: data?.name,
                            img: imgData.data.url,
                            designation: data?.designation,
                            description: data?.description,
                            facebook: data?.facebook,
                            instagram: data?.instagram,
                            twitter: data?.twitter




                        }


                        fetch("http://localhost:5000/employee", {
                            method: "PUT",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(updateEmployee),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                setLoading(false)
                                if (data.acknowledged) {
                                    toast.success("employee Update SuccessFully")
                                    reset();
                                    navigate('/team')
                                }
                            });


                    }


                })

        }


        else {

            const updateEmployee = {
                _id: employee?._id,
                name: data?.name,
                img: employee?.img,
                designation: data?.designation,
                description: data?.description,
                facebook: data?.facebook,
                instagram: data?.instagram,
                twitter: data?.twitter



            };

            fetch("http://localhost:5000/employee", {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updateEmployee),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setLoading(false)
                    if (data.acknowledged) {
                        toast.success("employee Update SuccessFully")
                        reset();
                        navigate('/team')
                    }
                });





        }

        // console.log(data)




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
                            {
                                `Edit Details About ${employee?.name}`
                            }

                        </h1>

                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div className="space-y-0.5   text-sm">
                                <label htmlFor="firstName" className="block dark:text-gray-400">
                                    Employee Name
                                </label>
                                <input

                                    defaultValue={employee?.name}
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    id="Employee-Name"
                                    placeholder="Employee Name"
                                    className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                          focus:bg-white shadow-md"
                                />

                                {errors.name && (
                                    <p className="text-red-600">{errors.name.message}</p>
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
                                        {...register("url")}
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"

                                    />
                                </label>
                                
                            </div> */}

                            <div className="space-y-0.5 text-sm">
                                <div className='flex items-center gap-4'>
                                    <label htmlFor="firstName" className="block dark:text-gray-400">
                                        Image
                                    </label>

                                    <small className='text-red-500'>[ Image should not be large then 200 KB ] </small>
                                </div>

                                <input type="file"

                                    {...register("url")}
                                    className="file-input file-input-secondary border-0  w-full  text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9] focus:bg-white shadow-md" />


                            </div>



                        </div>

                        <hr className="my-3" />

                        <div className="space-y-0.5   text-sm">
                            <input

                                defaultValue={employee?.designation}
                                type="text"
                                {...register("designation", {
                                    required: "Designation Is required"
                                })}
                                id="Employee-Designation"
                                placeholder="Employee Designation"
                                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md"
                            />

                            {errors.designation && (
                                <p className="text-red-600">{errors.designation.message}</p>
                            )}
                        </div>

                        <div className="space-y-0.5 text-sm  mt-5">

                            <textarea

                                defaultValue={employee?.description}
                                type="text"
                                {...register("description", { required: "Employee Details is required" })}
                                // name="subject"
                                id="description"
                                rows={5}
                                placeholder="Employee Details"
                                className="w-full px-4 py-3 border rounded-md text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                                      focus:bg-white shadow-md"
                            />
                            {errors.description && (
                                <p className="text-red-600">{errors.description.message}</p>
                            )}
                        </div>
                        <hr className="my-3" />

                        <div className="space-y-0.5   text-sm mt-5">
                            <input
                                defaultValue={employee?.facebook}
                                type="text"
                                {...register("facebook")}
                                id="Title2"
                                placeholder="Facebook URL"
                                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md"
                            />


                        </div>
                        <div className="space-y-0.5   text-sm mt-5">
                            <input
                                defaultValue={employee?.twitter}
                                type="text"
                                {...register("twitter")}
                                id="Title2"
                                placeholder="Twitter URL"
                                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md"
                            />


                        </div>
                        <div className="space-y-0.5   text-sm mt-5">
                            <input

                                defaultValue={employee?.instagram}
                                type="text"
                                {...register("instagram")}
                                id="Title2"
                                placeholder="Instagram URL"
                                className="w-full px-4 py-3 rounded-md border text-gray-700 focus:outline-[#00a6b265] bg-[#EBF8F9]
                    focus:bg-white shadow-md"
                            />


                        </div>



                        <button className="block w-full p-3 text-center rounded-sm  bg-primary hover:bg-secondary text-white mt-6">
                            Upload
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default EditForm;
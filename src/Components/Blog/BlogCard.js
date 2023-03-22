import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {title,img,description,_id} = blog;
    return (
        <div class="flex justify-center"
         data-aos="zoom-in"
         data-aos-duration="2000">
                        <div
                            class="block max-w-sm rounded-lg bg-white shadow-lg ">
                            <a href="#!">
                                <img
                                    class="rounded-t-lg"
                                    src={img}
                                    alt="" />
                            </a>
                            <div class="p-6">
                                <p className='mb-2 text-neutral-600'>{blog?.date}</p>
                                <h5
                                    class="mb-2 text-lg font-medium leading-tight text-neutral-800  ">
                                    {title}
                                </h5>
                                
                                    {
                                        description?.[0].content?.length >= 200 && 

                                        <p class="mb-4 text-base text-neutral-600 ">

                                                {
                                                    description?.[0].content?.slice(0,100) + "......"

                                                }

                                            </p>
                                        
                                    }
                                
                               <Link
                               to={`/blogs/${_id}`}
                               >

                               <button
                                    type="button"
                                    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium   leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Continue Reading
                                </button>
                               </Link>
                            </div>
                        </div>
                    </div>
    );
};

export default BlogCard;
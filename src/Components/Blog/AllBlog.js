import React from 'react';
import Loading from '../Shared/Loading/Loading';
import BlogCard from './BlogCard';

const AllBlog = ({blogs,isLoading}) => {

    
    return (

          
          <div className='pt-10 pb-20 bg-[#DBF2F4]'>
            <h1 className='text-4xl playrify text-center font-semibold mt-8'>
                My Blog </h1>

            <div className=' md:w-[90%] lg:w-[60%] w-[90%] mx-auto mt-16'>
            {
                        isLoading && 
                        <   Loading></Loading>
                    }

                <div className='grid md:grid-cols-2 gap-7 '>

                   

                    {
                        blogs?.map(blog=><BlogCard
                        key={blog?._id}

                        blog={blog}

                        
                        >


                        </BlogCard>)
                    }
                    

                </div>

            </div>

        </div>

       
        
    );
};

export default AllBlog;
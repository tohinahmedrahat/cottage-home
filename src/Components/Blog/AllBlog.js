import React from 'react';
import Loading from '../Shared/Loading/Loading';
import BlogCard from './BlogCard';

const AllBlog = ({blogs,isLoading,isAdmin,refetch}) => {

    
    return (

          
          <div className='pt-10 pb-20 bg-[#DBF2F4]'>
            <h1 className='text-4xl playrify text-center font-semibold mt-8 '>
            Cottage Care Blog  </h1>
            <hr className='mt-3 border-t-[1px] border-primary w-16 mx-auto ' />

            <div className=' md:w-[90%]  w-[90%] mx-auto mt-16'>
            {
                        isLoading && 
                        <   Loading></Loading>
                    }

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 '>

                   

                    {
                        blogs?.map(blog=><BlogCard
                        key={blog?._id}

                        blog={blog}
                        isAdmin={isAdmin}
                        refetch={refetch}

                        
                        >


                        </BlogCard>)
                    }
                    

                </div>

            </div>

        </div>

       
        
    );
};

export default AllBlog;
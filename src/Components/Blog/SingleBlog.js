import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div className='min-h-screen'>
            <h1 className='mt-[40vh] text-4xl font-semibold text-center'> { data?.title}</h1>
        </div>
    );
};

export default SingleBlog;
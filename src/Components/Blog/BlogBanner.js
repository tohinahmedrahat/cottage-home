import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './BlogBanner.css'

const BlogBanner = () => {

    
        const handleDone = () => {
          // console.log(`Done after 5 loops!`);
        };
        const handleType = () => {
          // console.log(`Done after 5 loops!`);
        };

    return (
        <div className='blog-cover'>

            <div className=' flex justify-center text-center pt-[40vh]'>

                <h1 className='playrify md:text-6xl font-semibold text-3xl text-white'>
                    
                    

                    <Typewriter
                words={["Healthy Living Blog"]}
                loop={1000}
                cursor
                cursorStyle="।"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
                    
                    
                    </h1>

            </div>
            
        </div>
    );
};

export default BlogBanner;
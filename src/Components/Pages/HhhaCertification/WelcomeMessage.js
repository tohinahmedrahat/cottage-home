import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const WelcomeMessage = () => {

    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }
    const handleType = () => {
        // console.log(`Done after 5 loops!`)
    }

    return (
        <div>
            <div className="bg-primary  py-14 mb-5">

<div className="md:w-[80%] mx-auto  w-[95%]  text-white p-4 ">
<h1 className="md:text-2xl font-semibold "> Join Our Institute </h1>
<h4 className="mt-1 text-xl font-semibold">
<Typewriter
                     words={['“A Message from our Directors, Navin and Arvin Shivpal”']}
                     loop={1000}
                     cursor
                     cursorStyle='।'
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={1000}
                     onLoopDone={handleDone}
                     onType={handleType}
                 />
 
   </h4>
   
<p >
 
  <span className="text-xl mr-1 "> “Welcome”</span>
   We created this institution in order to not only give back but give power to our community. That is why we prefer to stay connected with the community, so please call us if you have any questions or concerns. As we like to believe,
   "Changing Lives, One Student at a Time".
 </p>
 

</div>

</div>
        </div>
    );
};

export default WelcomeMessage;
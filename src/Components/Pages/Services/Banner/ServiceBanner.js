import React from "react";
import { Typewriter } from "react-simple-typewriter";
import background from "../../../../assets/cooking2.png";


const ServiceBanner = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const handleType = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div>
      <div
        className=" relative bg-no-repeat bg-cover bg-center text-center min-h-[100vh] mb-20"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-2xl tracking-[1px] mx-auto pt-40 md:pt-[30vh] ">
          <h1 className="md:text-6xl text-2xl px-[15px] text-white font-[PlayfairDisplay] mb-[45px]">
            <Typewriter
              words={["You don’t have to struggle."]}
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
          <div className="absolute md:top-[52vh]">
          <h4 className=" md:text-xl text-sm font-semibold text-[#dbf2f4] font-[Roboto] mb-8 px-5 md:px-0">
          “I was hopeless and depressed. I couldn’t even clean my own home!”
          </h4>

          <p className="text-white text-base font-medium w-full">
          Our in-home Cottage Home Care Services can help.
          </p>
         
        </div>
        
        </div>
      </div>
     
    </div>
  );
};

export default ServiceBanner;

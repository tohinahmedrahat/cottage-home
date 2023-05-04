import React from "react";
import { Typewriter } from "react-simple-typewriter";
import hhaLogo from '../../../assets/hhalogo.png'
import { FiPhone } from "react-icons/fi";
import './HhhaCertification.css'

const HhhaBanner = () => {
  const handleDone = () => {
    // console.log(`Done after 5 loops!`)
  };
  const handleType = () => {
    // console.log(`Done after 5 loops!`)
  };

  return (
    <section>
      <div>
        <div
          
          className="relative bg-cover bg-center bg-no-repeat h-[80vh] hha-banner"
        >
          <div className="absolute inset-0 bg-[#00000028] sm:bg-transparent sm:bg-gradient-to-r sm:from-[#0000006d] sm:to-[#02020217]"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-5/6 lg:items-center lg:px-8">
            <div className="max-w-2xl text-center sm:text-left mt-[12vh]">
              <div className="flex  items-center gap-8 mb-3">
              <h1 className="text-3xl w-[250px] md:w-[400px] font-extrabold sm:text-5xl text-white max-w-sm  min-h-[110px]">
                <Typewriter
                  words={["Become HHA  Certified Today!"]}
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

              <p className="mt-4 text-start text-xl md:text-4xl sm:leading-relaxed text-white font-medium ">
                Brooklyn Institute of  Vocational Training 
              </p>

              <div>
              
              
              </div>

              <div className="flex items-center md:gap-32 gap-14">
              <div>
              <p className="mt-4 flex justify-start  items-center gap-2 font-semibold max-w-lg sm:text-xl md:text-3xl sm:leading-relaxed text-white">
                <FiPhone />
                929-386-0092
              </p>
              <div className="mt-8 flex flex-wrap  text-center">
                <div>
                <a
                  href="https://mybrooklyninstitute.com/"
                  target="_blank"
                  className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary   sm:w-auto bg-hov2 text-xl"
                >
                  Visit Us
                </a>
                </div>
                
              </div>
              </div>
              <div className="mt-5">
                  <img src={hhaLogo} alt="" className="md:w-36 md:h-36 w-20 h-20 "/>
                </div>
              </div>

              

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HhhaBanner;

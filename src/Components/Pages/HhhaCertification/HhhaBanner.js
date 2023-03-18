import React from "react";
import { Typewriter } from "react-simple-typewriter";
import image1 from "../../../assets/MedicalJobPlacement.jpg";

import { FiPhone } from "react-icons/fi";

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
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative bg-cover bg-center bg-no-repeat h-[80vh]"
        >
          <div className="absolute inset-0 bg-[#00000028] sm:bg-transparent sm:bg-gradient-to-r sm:from-[#0000007c] sm:to-[#0202021b]"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-5/6 lg:items-center lg:px-8">
            <div className="max-w-xl text-center sm:text-left mt-[12vh]">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-white max-w-sm  min-h-[110px]">
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

              <p className="mt-4 max-w-lg sm:text-xl md:text-2xl sm:leading-relaxed text-white">
                Brooklyn Institute of Vocational Training <br /> Home Health
                Aide Certification
              </p>

              <p className="mt-4 flex justify-center md:justify-start  items-center gap-2 font-semibold max-w-lg sm:text-xl md:text-2xl sm:leading-relaxed text-white">
                <FiPhone />
                516-367-2266
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="https://mybrooklyninstitute.com/"
                  target="_blank"
                  className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring  sm:w-auto bg-hov2 text-xl"
                >
                  Visit Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HhhaBanner;

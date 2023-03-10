import React from "react";
import image1 from "../../../assets/hhaBanner.jpg";
import hhhaImage from "../../../assets/hhaimage.png";

const HhhaCertification = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${image1})` }}
        className="relative bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-[#0000006b] sm:bg-transparent sm:bg-gradient-to-r sm:from-[#0000008a] sm:to-[#0202026b]"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-5/6 lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
              Let us find your
              <strong className="block font-extrabold text-white/60">
                Forever Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between max-w-7xl">
        <div className="flex flex-col justify-center p-6 text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="leading-none sm:text-6xl ">
            <span className="lg:text-[40px] text-2xl font-extralight text-[#353535]">
              Dedicated Educators
            </span>{" "}
            <br />
            <span className="lg:text-[46px] text-4xl font-bold text-[#3f3e3e]">
              Our classes are
            </span>
            <br />
            <span className="text-[40px] text-3xl font-medium text-[#f26528]">
              taught by dedicated and experienced educators
            </span>
          </h1>
          <p className="mt-6 mb-8 text-sm text-[#777777] sm:mb-12">
            Both of our instructors have over 30 years of experience as
            Registered Nurses. Immediate Job Placement Your success is our
            priority. To support you, we have partnered with our sister agency,
            Cottage Home Care Services, to get you started and working as fast
            as a day after graduation! First-Rate Course Offerings We embrace a
            learning environment that will prepare you for the path ahead. Our
            classes incorporate traditional learning styles as well as hands-on
            experiences.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={hhhaImage}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </>
  );
};

export default HhhaCertification;

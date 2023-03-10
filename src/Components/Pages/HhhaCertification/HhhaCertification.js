import React from "react";
import image1 from "../../../assets/hhaBanner.jpg";
import hhhaImage from "../../../assets/hhaimage.png";

const HhhaCertification = () => {
  return (
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
  );
};

export default HhhaCertification;
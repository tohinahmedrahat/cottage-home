import React from "react";
import image1 from "../../../../assets/preferred-whyus.png";
import image2 from "../../../../assets/preferred-whyus2.png";

const WhyChoose = () => {
  return (
    <div className="pt-10 pb-[100px]">
      <div className="lg:flex max-w-4xl mx-auto items-center">
        <div className="lg:w-1/2 hidden md:block" data-aos="fade-right" data-aos-duration="2000">
          <div className="relative">
            <div>
              <img src={image1} className="w-1/2 lg:w-4/5 mx-auto lg:mx-0" alt="" />
            </div>
            <div className="absolute lg:-top-10 -top-10 lg:-left-48">
              <img src={image2} className="lg:w-2/5 w-1/3" alt="" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-5 lg:px-0"  data-aos="fade-left" data-aos-duration="2000">
          <h1 className="text-[#322e51] text-[35px] playrify font-bold mb-4">
            Why choose Cottage Home Care Service?
          </h1>
          <p className="text-[18px] text-[#67637e] tracking-wide mb-5">
            Founded in 2007, Preferred has grown ― in just 10 years ― into one
            of the state’s largest licensed home care agencies.
          </p>
          <strong className="text-[#322e51] font-semibold text-lg">
            Why? Because we’ve earned the trust of doctors & social workers
            across New York.
          </strong>
          <div className=" mt-[10vh] flex justify-start text-white gap-8">
            <a
              href="tel:+1516-367-2266"
              className=" px-9 py-4 rounded-full bg-primary capitalize  bg-hov2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

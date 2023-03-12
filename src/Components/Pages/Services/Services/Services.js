import React from "react";
import Care from "../../Home/Care/Care";
import ServiceBanner from "../Banner/ServiceBanner";
import Stressed from "../Stressed/Stressed";
import Carousel from "./Carousel";

const Services = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <ServiceBanner></ServiceBanner>
      <Stressed></Stressed>
      <div className="bg-[#EBF8F9] py-20">
        <h1 className="text-[#322e51] pb-2 text-3xl lg:text-[35px] relative font-bold font-[PlayfairDisplay] afterEffect mb-10 text-center px-5">"The Right Home Care for You"</h1>
      <div className="w-[95%] lg:w-[75%] mx-auto">
      <Carousel></Carousel>
      </div>
      </div>
      {/* <Care></Care> */}
      
    </div>
  );
};

export default Services;

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import background from "../../../../assets/services.jpg";
import './Banner.css'

const ServiceBanner = () => {
  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };

  const handleType = () => {
    // console.log(`Done after 5 loops!`);
  };
  return (
    <div>
      <div
        className=" relative  bg-cover bg-center text-center min-h-[80vh] service-banner"
        
      >
        <h1 className=" pt-[30vh] md:pt-[20vh] text-4xl lg:text-5xl relative font-bold font-[PlayfairDisplay] afterEffect mb-5 text-center px-5 text-white">
            Services
          </h1>
        <div className="md:pt-[15vh] ">
        
            <div className=" mx-auto  ">
              <div className="rounded-md bg-contact-2 md:max-w-3xl lg:max-w-4xl mx-auto text-white">
                <div className="bg-simple px-5 py-5 ">
                  
           
          <p className="text-center tracking-wide text-lg md:text-xl  px-5 font-bold">
            A Little About What We Do
          </p>
          <p className=" mt-5 w-[95%]  mx-auto  text-justify text-sm md:text-base ">
            Our experienced and highly trained caregivers provide the highest
            quality of care to both patients and their families. Our goal is to
            help individuals and their loved ones live happy and fulfilling
            lives. Arthritis, physical disabilities, and age-related conditions
            are some of the few circumstances that prevent patients from caring
            for themselves. Our caregivers can assist you with daily tasks such
            as mobility, eating, exercising, and grooming. We even offer
            Post-Surgical Assistance, recovering from home after surgery can
            limit your daily activities. Whether you are recovering from major
            surgery, childbirth, or plastic surgery, our compassionate
            caregivers can assist you to a healthy and complete recovery.
          </p>
                  
                  
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ServiceBanner;

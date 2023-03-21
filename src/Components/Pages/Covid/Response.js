import React from "react";

const Response = () => {
  return (
    <div className="mt-5 bg-[#EBF8F9] py-16">
      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 className="text-center text-gray font-[PlayfairDisplay] text-xl md:text-4xl font-semibold">
          Our Response
        </h1>

        <p className="md:w-[60%] mx-auto w-[95%] text-justify md:text-center mt-5">
          The safety of our employees and our clients at Cottage Home Care
          Services is our priority. As the Coronavirus (COVID-19) pandemic
          continues, we are monitoring the situation closely and following the
          guidance from the Centers for Disease Control and Prevention and local
          health authorities.
        </p>

        <div className="flex justify-center text-center mt-8 bg-hov2">
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
            target="_blank"
            className="uppercase text-semibold  text-white rounded-md bg-primary shadow-md px-5 py-3"
          >
            Find out More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Response;

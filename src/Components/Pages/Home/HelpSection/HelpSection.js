import React from "react";
import { FaStar } from "react-icons/fa";
import chatting from "../../../../assets/healthier.jpg";

const HelpSection = () => {
  return (
    <div className="bg-[#EBF8F9]">
      <h1 className="text-center playrify  md:text-3xl text-2xl lg:text-4xl font-bold text-[#322e51] pt-20 px-5 md:px-0">
        When you’re getting the right help <br className="hidden md:block" />{" "}
        you live healthier — and happier
      </h1>
      <hr className="border-[#00a6b2] border-t-2 w-12 mt-5 mb-36 mx-auto" />
      <div className="lg:flex md:w-[90%] mx-auto lg:pb-36 md:pb-20">
        <div
          className="bg-[#FFFFFF] pb-12 pt-16 px-5 md:pl-11 w-full"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h3 className="text-[#322e51] pb-12 font-bold text-2xl text-left">
            We Belive
          </h3>
          <div className="flex items-center">
            <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
            <p className="font-semibold text-lg lg:w-80 md:text-left text-justify">
              <span className="text-[#00a6b2] font-semibold text-lg">
                Aging is stressful enough.
              </span>{" "}
              The process of getting in-home care should be EFFORTLESS.
            </p>
          </div>
          <div className="flex items-center pt-7 pr-5">
            <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
            <p className="font-semibold text-lg lg:w-80 md:text-left text-justify">
              <span className="text-[#00a6b2] font-semibold text-lg">
                Every person deserves integrity.
              </span>{" "}
              Every human being on Earth deserves 100% compassionate care from a
              person of integrity.
            </p>
          </div>
          <div className="flex items-center pt-7">
            <FaStar className="mr-3 text-[#00A6B2] text-2xl"></FaStar>
            <p className="font-semibold text-lg lg:w-80 md:text-left text-justify">
              <span className="text-[#00a6b2] font-semibold text-lg">
                Every family deserves peace of mind.
              </span>{" "}
              No family should have to spend their days worrying, wondering
              whether their loved one is suffering.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:ml-[-100px]"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <img
            className="lg:mt-[-80px] lg:w-[80%] hidden md:block"
            src={chatting}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HelpSection;

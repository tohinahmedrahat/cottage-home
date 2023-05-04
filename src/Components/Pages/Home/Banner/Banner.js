import React from "react";
import { Typewriter } from "react-simple-typewriter";
import background from "../../../../assets/MainBanner.jpg";
import comfort from "../../../../assets/comfort .png";
import relief from "../../../../assets/relief-1.png";
import peace from "../../../../assets/peace.png";

import "./Banner.css";
import NewVideoBanner from "./NewVideoBanner";

const Banner = () => {

  return (
    <div>
      <NewVideoBanner></NewVideoBanner>
      <div
        className="  bg-no-repeat bg-cover bg-center text-center banner block md:hidden"

      >
        <div className=" tracking-[1px] mx-auto pt-40">
          <div className="h-[150px] max-w-2xl mx-auto main-text mt-[10vh]">
            <h1 className="md:text-6xl text-4xl px-[15px] text-white font-[PlayfairDisplay] ">

              RIGHT HOME CARE FOR YOU
            </h1>
          </div>
          <div className="md:mt-[8vh] banner-text ">
            <div className=" mx-auto  ">
              <div className="rounded-md bg-contact-2 md:max-w-3xl lg:max-w-4xl mx-auto">
                <div className="bg-simple px-5 py-4 ">
                  <p className="text-white text-sm text-justify font-normal">
                    Cottage Home Care Services provides care to seniors in need
                    and has taken on some of the most challenging cases in New
                    York City to fulfill its mandate of providing care to
                    everyone who qualifies.
                  </p>
                  <p className="text-white text-xl text-justify">-</p>
                  <p className="text-white text-sm text-justify font-normal">
                    Our company focuses on enhancing and building our people - staff, patients, and all others; a principle that has earned us a reputation for being generous, so much so that Cottage Care is known for lending a helping hand to seniors throughout New York City.
                  </p>
                  <h4 className=" md:text-xl text-sm font-semibold text-[#dbf2f4] font-[Roboto] mb-8 px-5 md:px-0 mt-5">
                    “HHA/PCA & CDPAP SERVICES THROUGHOUT NEW YORK CITY, NASSAU & SUFFOLK COUNTY, WESTCHESTER & ALBANY”
                  </h4>
                  <div className=" md:mt-[4vh] flex justify-center text-white font-semibold gap-8">
                    <a
                      href="tel:+1516-367-2266"
                      className=" px-8 py-2.5 rounded-full lg:text-lg bg-primary uppercase  bg-hov2 "
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center bg-[#DBF2F4] py-6">
          <div className=" flex items-center gap-3 lg:gap-5   ">
            <img src={comfort} alt="" className="lg:w-14 w-8 h-8 lg:h-14" />
            <p className="lg:text-xl text-sm font-semibold text-gray-700">
              Caregivers You Can Trust
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-[#49A4B0] py-6">
          <div className=" flex items-center lg:gap-5 gap-3   ">
            <img src={relief} alt="" className="lg:w-14 w-8 h-8 lg:h-14" />

            <p className="lg:text-xl text-sm font-semibold text-white">
              Experienced and Supportive
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-[#322E51] py-6">
          <div className=" flex items-center lg:gap-5 gap-3  ">
            <img src={peace} alt="" className="lg:w-14 w-8 h-8 lg:h-14" />
            <p className="lg:text-xl text-sm font-semibold text-white">
              Experienced Home Health Aides
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

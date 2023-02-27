import React from "react";
import image1 from "../../../../assets/struggle2.jpg";
import image2 from "../../../../assets/help3.png";
import { FaQuestion } from "react-icons/fa";

const DoYou = () => {
  return (
    <>
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-7xl">
            <div className="max-w-7xl mb-6">
              <h2 className="font-[PlayfairDisplay] text-3xl font-bold tracking-tight text-[#322e51] sm:text-5xl sm:leading-none max-w-lg mb-6">
                Do you…
              </h2>
              <div>
                <div className="text-gray-700 text-base md:text-lg flex items-center mb-2">
                  <span className="text-[#49a4b0] text-[22px] bg-[#bae1e6] rounded-full p-2 mr-[15px]">
                    <FaQuestion />
                  </span>
                  <p>
                    <strong className="font-bold text-[#322e51]">
                      Struggle{" "}
                    </strong>{" "}
                    to take care of daily tasks around the house?
                  </p>
                </div>
                <div className="text-gray-700 text-base md:text-lg flex items-center">
                  <span className="text-[#49a4b0] text-[22px] bg-[#bae1e6] rounded-full p-2 mr-[15px]">
                    <FaQuestion />
                  </span>
                  <p>
                    Feel{" "}
                    <strong className="font-bold text-[#322e51]">
                      {" "}
                      depressed{" "}
                    </strong>{" "}
                    and{" "}
                    <strong className="font-bold text-[#322e51]">
                      {" "}
                      lonely{" "}
                    </strong>
                    , not knowing where to start?
                  </p>
                </div>
                <div className="text-gray-700 text-base md:text-lg flex items-center">
                  <span className="text-[#49a4b0] text-[22px] bg-[#bae1e6] rounded-full p-2 mr-[15px]">
                    <FaQuestion />
                  </span>
                  <p>
                    <span className="font-bold text-[#322e51]">Lose sleep</span>{" "}
                    at night, because a loved one is not getting the care they
                    need?
                  </p>
                </div>
              </div>
            </div>
            <p>
              <strong className="text-[#322e51] font-semibold text-[22px]">
                You’re not alone – and we can help.
              </strong>
            </p>
          </div>
          <div className="flex items-center justify-end w-full lg:w-1/2 relative">
            <div className="w-2/3">
              <img className="object-cover" src={image1} alt="" />
            </div>
            <div className="w-full lg:w-2/3 absolute -bottom-24 lg:-bottom-9 right-9">
              <img className="object-cover" src={image2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dff1f3] w-full lg:-mt-9">
        <div className="max-w-[750px] py-[100px] mx-auto">
          <h2 className="text-center text-[#322e51] md:text-[35px] text-md px-5 font-bold playrify">
            We’re a licensed home care agency that helps families across the New
            York metropolitan area get the in-home care they need.
          </h2>
        </div>
      </div>
    </>
  );
};

export default DoYou;

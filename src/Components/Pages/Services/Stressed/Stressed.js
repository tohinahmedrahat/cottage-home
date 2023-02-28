import React from "react";
import { HiStar } from "react-icons/hi";
import image1 from "../../../../assets/parkinsons-activities1.jpg";
import image2 from "../../../../assets/Alzhiemers-activities2.jpg";

const Stressed = () => {
  return (
    <>
      <div className="my-20">
        <h1 className="text-[#322e51] pb-3 text-3xl lg:text-[35px] relative font-bold font-[PlayfairDisplay] afterEffect mb-10 text-center px-5">
          But living with it doesn’t <br className="hidden md:block" />
          have to be so <span className="text-[#00a6b2]">painful.</span>
        </h1>
        <p className="text-center tracking-wide text-lg text-[#67637e] px-5">
          We’re here to put you at ease… and give your
          <br className="hidden md:block" />
          loved ones a sense of comfort.
        </p>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 md:px-14">
              <p className="max-w-lg mb-4 text-lg tracking-tight text-[#67637e] ">
                Our carefully-trained caregivers help patients go about their
                day safely – while showering them with love and kindness.
              </p>
              <div className="text-base text-gray-700 md:text-lg">
                <h5 className="text-[#322e51] font-semibold mb-4">
                  Preferred aides will provide:
                </h5>
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-[#2f3450] text-[1em] tracking-wide">
                    Reliable medication reminders, so a dose is never forgotten.
                  </span>
                </p>
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-[#2f3450] text-[1em] tracking-wide">
                    Healthy, delicious meals, so your loved one gets the
                    nutrition they need.
                  </span>
                </p>
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-[#2f3450] text-[1em] tracking-wide">
                    Patient daily care with tasks like bathing, dressing and
                    grooming.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img
              className="object-cover w-full  rounded "
              src={image1}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 lg:py-24 py-16">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="relative lg:w-1/2 mb-10 lg:mb-0">
            <img
              className="object-cover w-full  rounded "
              src={image2}
              alt=""
            />
          </div>
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 md:px-11">
              <div className="text-base text-gray-700 md:text-lg">
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-[#2f3450] text-[1em] tracking-wide">
                    Reminders + escorts, so appointments are never missed.
                  </span>
                </p>
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-[#2f3450] text-[1em] tracking-wide">
                    Warm companionship, so your loved one is never lonely - even
                    on the most confusion-filled days
                  </span>
                </p>
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-[#2f3450] text-[1em] tracking-wide">
                    A calming, steady presence that helps prevent power
                    struggles and flare-ups.
                  </span>
                </p>
                <p className="flex justify-center items-center mb-5">
                  <span className="text-[#00a6b2] bg-[#ebf8f9] rounded-full mr-3">
                    <HiStar className="text-3xl" />
                  </span>
                  <span className="text-[#2f3450] text-[1em] tracking-wide">
                    Unparalleled protection from frightening, dangerous
                    wandering.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stressed;

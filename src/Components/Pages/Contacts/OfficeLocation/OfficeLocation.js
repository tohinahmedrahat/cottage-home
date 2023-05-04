import React, { useContext, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Modal from "../ContactInfo/Modal/Modal";

const OfficeLocation = () => {
  const now = new Date().toLocaleDateString("en-US", { weekday: "long" });
  //   console.log(now);

  let val;
  let day;
  let text;

  switch (now) {
    case "Sunday":
      //   console.log("sun hello");
      val = "Sun";
      text = "Closed today";
      day = "Sun Closed";
      break;
    case "Monday":
      //   console.log("mon hello");
      val = "Mon";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Mon 08:30 am – 05:00 pm";
      break;
    case "Tuesday":
      //   console.log("tue hello");
      val = "Tue";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Tue 08:30 am – 05:00 pm";
      break;
    case "Wednesday":
      //   console.log("wed hello");
      val = "Wed";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Wed 08:30 am – 05:00 pm";
      break;
    case "Thursday":
      //   console.log("thu hello");
      val = "Thu";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Thu 08:30 am – 05:00 pm";
      break;
    case "Friday":
      //   console.log("fri hello");
      val = "Fri";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Fri 08:30 am – 05:00 pm";
      break;
    case "queensSat":
      //   console.log("fri hello");
      val = "queensSat";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Sat 08:30 am – 05:00 pm";
      break;
    case "queensSun":
      //   console.log("fri hello");
      val = "queensSun";
      text = "Open today 08:30 am – 05:00 pm";
      day = "Sun 08:30 am – 05:00 pm";
      break;
    default:
      val = "Sat";
      text = "Closed today";
      day = "Sat Closed";
  }
  const selectedText = { text };
  const selectedDay = { day };
  const selectedVal = { val };
  const all = [{ selectedText, selectedDay, selectedVal }];
  //   console.log(all);

  const [office, setOffice] = useState("");
  const [modalData, setModalData] = useState(false);

  const officeHandler = (office) => {
    setOffice(office);
    setModalData(true);
  };

  const queens = {
    name: "Queens Office",
    address1: "126-01 Liberty Avenue, South Richmond Hill",
    address2: " Queens, New York 11419, United States.",
    direction:
      "https://www.google.com/maps?daddr=126-01+Liberty+Avenue,+South+Richmond+Hill+Queens,+New+York+11419,+United+States",
  };

  const albany =     {
    name: "Albany Office",
    address1: "130 Washington Avenue Albany ,",
    address2: "New York 12210, United States.",
    direction:
      "https://www.google.com/maps/dir//130+Washington+Ave,+Albany,+NY+12210,+USA/@42.6548809,-73.795538,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89de0a3aa4c10641:0xaf8dd4ae670e2237!2m2!1d-73.7605185!2d42.6548231?hl=en",
  }

  const offices = [
    {
      name: "Long Island Office",
      address1: "25 Newbridge Road, Suite 302 Hicksville,",
      address2: "New York 11801, United States.",
      direction:
        "https://www.google.com/maps/dir//25+Newbridge+Rd+Unit+302,+Oyster+Bay,+NY+11801/@40.7680687,-73.5969743,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c280e280b85923:0x6d08773ea58e3908!2m2!1d-73.5269344!2d40.7680899",
    },

    {
      name: "Bronx Office",
      address1: "391 East 149th Street, Bronx,",
      address2: "New York 10455, United States.",
      direction:
        "https://www.google.com/maps?daddr=391+East+149th+Street,+Bronx,+New+York+10455,+United+States",
    },

  ];

  return (
    <div className="bg-[#322E51] py-24 ">
      <div className="w-[95%] lg:w-[90%] mx-auto ">
        <h1 className="text-lg md:text-2xl lg:text-4xl playrify text-white  font-semibold">
          Call today or come visit — at a location near you.
        </h1>
        <hr className="border-t-[.5px] border-primary mt-5 w-[80px]" />

        <h5 className=" text-xl md:text-2xl text-primary mt-5 font-semibold">
          {" "}
          Cottage Home Care Services of New York Office Locations{" "}
        </h5>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14  text-center md:text-start ">
          <div
          
          className="md:mt-0 border-2 py-8 md:py-0 border-primary rounded-md md:border-0"

          data-aos="zoom-in" data-aos-duration="2000">
            <h5 className="text-lg font-semibold text-primary">
              {queens?.name}
            </h5>
            <p className="text-white">{queens?.address1}</p>
            <p className="text-white">{queens?.address2}</p>

            <div className="mt-1 ">
              {/* <p className="text-2xl text-[#1b1b1b] mb-6">Hours</p> */}
              <select className="focus:outline-none text-lg rounded-md py-2 bg-[#322E51] text-primary">
                {all.map((al, index) => (
                  <option value={al.selectedVal.val} key={index}>
                    {al.selectedText.text}
                  </option>
                ))}
                <option value="Mon">Mon 08:30 am – 05:00 pm</option>
                <option value="Tue">Tue 08:30 am – 05:00 pm</option>
                <option value="Wed">Wed 08:30 am – 05:00 pm</option>
                <option value="Thu">Thu 08:30 am – 05:00 pm</option>
                <option value="Fri">Fri 08:30 am – 05:00 pm</option>
                <option value="queensSat">Sat 08:30 am – 05:00 pm</option>
                <option value="queensSun">Sun 08:30 am – 05:00 pm</option>
              </select>
            </div>

            <a
              href={queens?.direction}
              target="_blank"
              className="uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-primary"
            >
              {" "}
              <AiOutlineArrowRight /> Get Direction
            </a>
            <div className="mt-5 bg-hov2">
              <label
                onClick={() => officeHandler(queens)}
                htmlFor="booking-modal"
                className="bg-primary px-4 py-3 rounded-md shadow-md text-white text-sm  cursor-pointer "
              >
                Contact the {queens.name}
              </label>
            </div>
          </div>
          {offices.map((office, index) => (
            <div key={index}
            
            className="mt-5 md:mt-0 border-2 py-8 md:py-0 border-primary rounded-md md:border-0"
            data-aos="zoom-in" data-aos-duration="2000">
              <h5 className="text-lg font-semibold text-primary  
              
             
              ">
                {office?.name}
              </h5>
              <p className="text-white">{office?.address1}</p>
              <p className="text-white">{office?.address2}</p>

              <div className="mt-1">
                {/* <p className="text-2xl text-[#1b1b1b] mb-6">Hours</p> */}
                <select className="focus:outline-none text-lg rounded-md py-2 bg-[#322E51] text-primary">
                  {all.map((al, index) => (
                    <option value={al.selectedVal.val} key={index}>
                      {al.selectedText.text}
                    </option>
                  ))}
                  <option value="Mon">Mon 08:30 am – 05:00 pm</option>
                  <option value="Tue">Tue 08:30 am – 05:00 pm</option>
                  <option value="Wed">Wed 08:30 am – 05:00 pm</option>
                  <option value="Thu">Thu 08:30 am – 05:00 pm</option>
                  <option value="Fri">Fri 08:30 am – 05:00 pm</option>
                  <option value="Sat">Sat Closed</option>
                  <option value="Sun">Sun Closed</option>
                </select>
              </div>

              <a
                href={office?.direction}
                target="_blank"
                className="uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-primary"
              >
                {" "}
                <AiOutlineArrowRight /> Get Direction
              </a>
              <div className="mt-5 bg-hov2">
                <label
                  onClick={() => officeHandler(office)}
                  htmlFor="booking-modal"
                  className="bg-primary px-4 py-3 rounded-md shadow-md text-white text-sm  cursor-pointer "
                >
                  Contact the {office.name}
                </label>
              </div>
            </div>
          ))}

<div
          
          className="md:mt-0 border-2 py-8 md:py-0 border-primary rounded-md md:border-0 "

          data-aos="zoom-in" data-aos-duration="2000">
            <h5 className="text-lg font-semibold text-primary">
              {albany?.name}
            </h5>
            <p className="text-white">{albany?.address1}</p>
            <p className="text-white">{albany?.address2}</p>

            

            <a
              href={albany?.direction}
              target="_blank"
              className="uppercase text-sm text-white flex  items-center mt-3 justify-center md:justify-start hover:text-primary"
            >
              {" "}
              <AiOutlineArrowRight /> Get Direction
            </a>
            <div className="mt-5 bg-hov2">
              <label
                onClick={() => officeHandler(albany)}
                htmlFor="booking-modal"
                className="bg-primary px-4 py-3 rounded-md shadow-md text-white text-sm  cursor-pointer "
              >
                Contact the {albany.name}
              </label>
            </div>
          </div>
        </div>
        {modalData && (
          <Modal office={office} setModalData={setModalData}></Modal>
        )}
      </div>
    </div>
  );
};

export default OfficeLocation;

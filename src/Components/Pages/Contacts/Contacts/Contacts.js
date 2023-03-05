import React from "react";

const Contacts = () => {
  const now = new Date().toLocaleDateString("en-US", { weekday: "long" });
  console.log(now);

  let val;
  let day;
  let text;

  switch (now) {
    case "Sunday":
      console.log("sun hello");
      val = "Sun";
      text = "Closed today";
      day = "Sun Closed";
      break;
    case "Monday":
      console.log("mon hello");
      val = "Mon";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Mon 09:00 am – 05:00 pm";
      break;
    case "Tuesday":
      console.log("tue hello");
      val = "Tue";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Tue 09:00 am – 05:00 pm";
      break;
    case "Wednesday":
      console.log("wed hello");
      val = "Wed";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Wed 09:00 am – 05:00 pm";
      break;
    case "Thursday":
      console.log("thu hello");
      val = "Thu";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Thu 09:00 am – 05:00 pm";
      break;
    case "Friday":
      console.log("fri hello");
      val = "Fri";
      text = "Open today 09:00 am – 05:00 pm";
      day = "Fri 09:00 am – 05:00 pm";
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
  console.log(all);

  return (
    <div className="flex justify-end">
      <div className="min-w-[1400px]">
        <div className="flex justify-between w-full">
          <div className="w-full">
            <h1 className="text-5xl text-[#f76600] mb-10 font-bold playrify text-left">
              Contact us at the
              <br />
              Hicksville Office
            </h1>
            <p className="text-2xl text-[#1b1b1b] mb-6">
              Better yet, see us in person!
            </p>
            <p className="text-lg text-[#5e5e5e] mb-6 ">
              We love our customers, so feel free to visit during normal
              business hours.
            </p>
            <p className="text-2xl text-[#1b1b1b] mb-6">Cottage Home Care</p>
            <p className="text-lg text-[#5e5e5e] mb-6 ">
              25 Newbridge Road, Suite 302, Hicksville, New York 11801, United
              States
            </p>
            <div>
              <p className="text-2xl text-[#1b1b1b] mb-6">Hours</p>
              <select className="focus:outline-none text-lg w-96 py-3">
                {all.map((al, index) => (
                  <option value={al.selectedVal.val} key={index}>
                    {al.selectedText.text}
                  </option>
                ))}
                <option value="Mon">Mon 09:00 am – 05:00 pm</option>
                <option value="Tue">Tue 09:00 am – 05:00 pm</option>
                <option value="Wed">Wed 09:00 am – 05:00 pm</option>
                <option value="Thu">Thu 09:00 am – 05:00 pm</option>
                <option value="Fri">Fri 09:00 am – 05:00 pm</option>
                <option value="Sat">Sat Closed</option>
                <option value="Sun">Sun Closed</option>
              </select>
            </div>
            <button className="uppercase text-base bg-[#ff6900] rounded py-4 mt-6 px-8 text-black cursor-pointer font-bold">
              Contact The Hicksville Office
            </button>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7242232894528!2d-73.52912308452832!3d40.76808987932589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c280e280b85923%3A0x6d08773ea58e3908!2s25%20Newbridge%20Rd%20Unit%20302%2C%20Oyster%20Bay%2C%20NY%2011801%2C%20USA!5e0!3m2!1sen!2sbd!4v1677688110766!5m2!1sen!2sbd"
              width="800"
              height="630"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hicksville Office"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

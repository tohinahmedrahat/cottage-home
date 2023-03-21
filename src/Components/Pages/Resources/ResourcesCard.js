import React from "react";
import "./RecourcesCard.css";

const ResourcesCard = () => {
  const resources = [
    {
      title: "Physical Form (pdf)",
      link: "https://img1.wsimg.com/blobby/go/bfad472c-022f-4d7f-b6ac-5e729dc87ff7/downloads/1110_001.pdf?ver=1669150806888",
    },
    {
      title: "Timesheet (pdf)",
      link: "https://img1.wsimg.com/blobby/go/bfad472c-022f-4d7f-b6ac-5e729dc87ff7/downloads/1108_001.pdf?ver=1669150806889",
    },
    {
      title: "Time-off Form (pdf)",
      link: "https://img1.wsimg.com/blobby/go/bfad472c-022f-4d7f-b6ac-5e729dc87ff7/downloads/1109_001.pdf?ver=1669150806889",
    },
    {
      title: "Celestial Timesheet (pdf)",
      link: "https://img1.wsimg.com/blobby/go/bfad472c-022f-4d7f-b6ac-5e729dc87ff7/downloads/1114_001.pdf?ver=1669150806889",
    },
    {
      title: "DOH (pdf)",
      link: "https://img1.wsimg.com/blobby/go/bfad472c-022f-4d7f-b6ac-5e729dc87ff7/downloads/1115_001.pdf?ver=1669150806889",
    },
    {
      title: "Relevant Personnel Directory (pdf)",
      link: "https://img1.wsimg.com/blobby/go/bfad472c-022f-4d7f-b6ac-5e729dc87ff7/downloads/11111222222.pdf?ver=1669150806889",
    },
  ];
  return (
    <div className="py-10 min-h-screen bg-[#EBF8F9] px-5">
      <h1 className="text-center playrify md:text-4xl text-xl font-bold text-primary ">
        {" "}
        Downloads{" "}
      </h1>
      <hr className="border-[#00a6b2] border-t-[1px]  w-12 mt-2  mb-10 mx-auto" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-7">
        {resources?.map(
          (resource, index) => (
            <div
              key={index}
              className="card w-80 lg:w-96 bg-base-100 shadow-xl mx-auto mt-5 bg-hov3 hover:bg-primary hover:text-white main-card bg-hov2"
            >
              <div
                className="card-body"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <h2 className="text-xl font-normal text-center open-sans">
                  {resource?.title}
                </h2>

                <div className="card-actions justify-center mt-6 ">
                  <a
                    href={resource?.link}
                    target="_blank"
                    className=" custom-ancor  bg-primary text-white px-5 py-2.5
                            hover:bg-secondary open-sans hover:text-white rounded-md shadow-md"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          )
          //                 <div className="card w-96 bg-base-100 shadow-xl image-full text-white">
          //   <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5v6bXa8WWAu7dLUJE7VopeG4aHP_lB8EovQ&usqp=CAU" alt="Shoes" /></figure>
          //   <div className="card-body">
          //     <h2 className="card-title">Shoes!</h2>
          //     <p>If a dog chews shoes whose shoes does he choose?</p>
          //     <div className="card-actions justify-end">
          //       <button className="btn btn-primary">Buy Now</button>
          //     </div>
          //   </div>
          // </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesCard;

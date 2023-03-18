import React from "react";
import symptrom from "../../../assets/Covid-19/gfx-b.png";
import fever from "../../../assets/Covid-19/symptom-a.png";
import cough from "../../../assets/Covid-19/symptom-b.png";
import breathing from "../../../assets/Covid-19/symptom-c.png";

const CovidSymption = () => {
  const symptoms = [
    {
      name: "High Fever",
      img: fever,
      description:
        " this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.",
    },
    {
      name: "Continuous cough",
      img: cough,
      description:
        "this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).",
    },
    {
      name: "Difficulty breathing",
      img: breathing,
      description:
        " Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.",
    },
  ];
  return (
    <div className="my-20 lg:w-[80%] mx-auto font-[Roboto] " id="symtom-covid">
      <div className="lg:grid md:grid-cols-2 gap-7 items-center flex flex-col-reverse">
        <div data-aos-duration="2000" data-aos="fade-right">
          <p className="text-[#F65858] text-lg font-semibold">
            What are the symptoms of COVID-19?
          </p>

          <h1 className="text-4xl font-bold  mt-4">Symptoms of Coronavirus</h1>

          <p className="text-justify mt-5">
            The most common symptoms of COVID-19 are fever, tiredness, and dry
            cough. Some patients may have aches and pains, nasal congestion,
            runny nose, sore throat or diarrhea. These symptoms are usually mild
            and begin gradually. Also the symptoms may appear 2-14 days after
            exposure.
          </p>

          <div>
            {symptoms.map((symptom, index) => (
              <div key={index} className=" mt-8">
                <div className="flex ">
                  <div>
                    <img
                      src={symptom.img}
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <div className="ml-5 w-[90%]">
                    <p className="text-justify">
                      <span className="text-lg text-primary font-semibold">
                        {symptom.name}
                      </span>{" "}
                      - <span>{symptom.description} </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos-duration="2000" data-aos="fade-left">
          <img src={symptrom} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CovidSymption;

import React from "react";
import Banner from "../Banner/Banner";
import DoYou from "../DoYou/DoYou";
import EasierLife from "../EasierLife/EasierLife";
import HelpSection from "../HelpSection/HelpSection";
import Quality from "../Quality/Quality";
import Testimonial from "../TestiMonial/Testimonial";
import WeAre from "../WeAre/WeAre";
import Welcome from "../Welcome/Welcome";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="pb-20">
      <Banner></Banner>
      <Welcome></Welcome>
      <HelpSection></HelpSection>
      <WeAre></WeAre>
      <Quality></Quality>
      <DoYou></DoYou>
      <WhyChoose></WhyChoose>
      <Testimonial></Testimonial>
      <EasierLife></EasierLife>
    </div>
  );
};

export default Home;

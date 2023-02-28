import React from "react";
import Banner from "../Banner/Banner";
import DoYou from "../DoYou/DoYou";
import EasierLife from "../EasierLife/EasierLife";
import HelpSection from "../HelpSection/HelpSection";
import Quality from "../Quality/Quality";
import Stressed from "../../Services/Stressed/Stressed";
import TestimonialPart from "../TestiMonial/TestimonialPart";

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
      <TestimonialPart></TestimonialPart>
      <EasierLife></EasierLife>
    </div>
  );
};

export default Home;

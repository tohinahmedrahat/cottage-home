import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import EasierLife from "../EasierLife/EasierLife";
import HelpSection from "../HelpSection/HelpSection";
import Quality from "../Quality/Quality";
import TestimonialPart from "../TestiMonial/TestimonialPart";

import WeAre from "../WeAre/WeAre";
import Welcome from "../Welcome/Welcome";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  useTitle("Home");
  window.scrollTo(0, 0);
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <HelpSection></HelpSection>
      <WeAre></WeAre>
      <Quality></Quality>
      
      <WhyChoose></WhyChoose>
      <TestimonialPart></TestimonialPart>
      <EasierLife></EasierLife>
    </div>
  );
};

export default Home;

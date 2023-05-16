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
import Benefits from "../../Benefits/Benefits";
import NewWelcome from "../../NewWelcome/NewWelcome";

const Home = () => {
  useTitle("Home");
  window.scrollTo(0, 0);
  return (
    <div id="google_translate_element">
      <Banner></Banner>
      <div className="hidden md:block">
      <Welcome></Welcome>
      </div>
     <div className="block md:hidden">
     <NewWelcome></NewWelcome>
     </div>
      <HelpSection></HelpSection>
      <WeAre></WeAre>
      <Quality></Quality>
      
      <WhyChoose></WhyChoose>
      <Benefits></Benefits>
      <TestimonialPart></TestimonialPart>
      <EasierLife></EasierLife>
      
    </div>
  );
};

export default Home;

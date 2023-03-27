import React from "react";
import useTitle from "../../Hooks/useTitle";
import HhhaBanner from "./HhhaBanner";
import HhhaCertificationAbout from "./HhhaCertificationAbout";
import HhhaContactForm from "./HhhaContactForm";
import HhhaSchoolMap from "./HhhaSchoolMap";
import WelcomeMessage from "./WelcomeMessage";




const HhhaCertification = () => {
  useTitle("HHA Certifications");
  window.scrollTo(0, 0);
  return (
    <div>
      <HhhaBanner></HhhaBanner>
      <WelcomeMessage> </WelcomeMessage>
      <HhhaCertificationAbout></HhhaCertificationAbout>
      <HhhaSchoolMap></HhhaSchoolMap>
      
      <HhhaContactForm></HhhaContactForm>
    </div>
  );
};

export default HhhaCertification;

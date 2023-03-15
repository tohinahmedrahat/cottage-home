import React from "react";
import HhhaBanner from "./HhhaBanner";
import HhhaCertificationAbout from "./HhhaCertificationAbout";
import HhhaContactForm from "./HhhaContactForm";
import WelcomeMessage from "./WelcomeMessage";

const HhhaCertification = () => {
  return (
    <div>
      <HhhaBanner></HhhaBanner>
      <WelcomeMessage> </WelcomeMessage>
      <HhhaCertificationAbout></HhhaCertificationAbout>
      <HhhaContactForm></HhhaContactForm>
    </div>
  );
};

export default HhhaCertification;

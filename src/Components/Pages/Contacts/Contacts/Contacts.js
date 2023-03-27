import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Care from "../../Home/Care/Care";
import ContactForm from "../ContactInfo/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import OfficeLocation from "../OfficeLocation/OfficeLocation";

const Contacts = () => {
  useTitle('Contact Us');
  window.scrollTo(0, 0);
  return (
    <div>
      <Care></Care>
      <ContactInfo></ContactInfo>
      <ContactForm></ContactForm>
      <OfficeLocation></OfficeLocation>
    </div>
  );
};

export default Contacts;

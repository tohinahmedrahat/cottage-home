import React from 'react';
import Care from '../../Home/Care/Care';
import ContactForm from '../ContactInfo/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';
import OfficeLocation from '../OfficeLocation/OfficeLocation';

const Contacts = () => {
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
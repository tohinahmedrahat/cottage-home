import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import EasierLife from '../EasierLife/EasierLife';
import HelpSection from '../HelpSection/HelpSection';
import Quality from '../Quality/Quality';
import Stressed from '../Stressed/Stressed';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HelpSection></HelpSection>
            <Quality></Quality>
            <Care></Care>
            <Stressed></Stressed>
            <EasierLife></EasierLife>
        </div>
    );
};

export default Home;
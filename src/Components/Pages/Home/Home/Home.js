import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import EasierLife from '../EasierLife/EasierLife';
import HelpSection from '../HelpSection/HelpSection';
import Quality from '../Quality/Quality';
import Stressed from '../Stressed/Stressed';
import Testimonial from '../TestiMonial/Testimonial';
import WeAre from '../WeAre/WeAre';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div className='pb-20'>
            <Banner></Banner>
            <Welcome></Welcome>
            <HelpSection></HelpSection>
            <WeAre></WeAre>
            <Quality></Quality>
            <Stressed></Stressed>
            <Testimonial></Testimonial>
            <EasierLife></EasierLife>
        </div>
    );
};

export default Home;
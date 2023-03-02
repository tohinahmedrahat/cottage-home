import React from 'react';
import AboutCovid from './AboutCovid';
import Banner from './Banner';
import CovidSymption from './CovidSymption';
import PreventSteps from './PreventSteps';
import Response from './Response';

const Covid = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    return (
        
        <div className=''>
            <div className='w-[95%] md:w-[80%] mx-auto '>

                <Banner
                
                ></Banner>
                
            </div>
            <Response></Response>
            <AboutCovid></AboutCovid>
            <CovidSymption></CovidSymption>  
            <PreventSteps></PreventSteps>
        </div>
    );
};

export default Covid;
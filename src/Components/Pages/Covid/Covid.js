import React from 'react';
import Banner from './Banner';
import PreventSteps from './PreventSteps';
import Response from './Response';

const Covid = () => {
    return (
        <div className=''>
            <div className='w-[95%] md:w-[80%] mx-auto '>

                <Banner></Banner>
                

            </div>
            <Response></Response>
            <PreventSteps></PreventSteps>
        </div>
    );
};

export default Covid;
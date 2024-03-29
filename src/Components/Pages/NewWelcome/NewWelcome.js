import React from 'react';
import './NewWelcome.css'
import ceo from '../../../../src/assets/ceo-update-picturemobile.jpg'

const NewWelcome = () => {
    return (
        <div >
            <figure className="snip1390">
                <img src={ceo} alt="profile-sample3" className="profile" />
                <figcaption>
                    <h2>Navin Shivpal</h2>
                    <h4>CEO - Cottage Care</h4>
                    <blockquote>
                        <p className='mt-2 font-medium'>“A Message from our CEO & Administrator”</p>
                        <p className='mt-1'> “Welcome”</p>
                        <p className='mt-1.5 text-justify'>“ My commitment to providing a reliable, professional, caring and utmost friendly service through my agency is my number one priority. That is why if you have any serious inquiries or concerns or looking for an agency that truly cares, I urge you to call me directly. Those interested in Home Health Care and the CDPAP may also contact me at any time! 347-975-2525.”</p>

                    </blockquote>
                </figcaption>
            </figure>
            
           
        </div>
    );
};

export default NewWelcome;
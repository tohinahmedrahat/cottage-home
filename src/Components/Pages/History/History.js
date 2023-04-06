import React from 'react';

import img from '../../../../src/assets/pexels-photo-927022 (1).webp'

const History = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-7 row-gap-8 lg:grid-cols-2 items-center">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg  font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-none text-center   ">
              The History, Of 
              
             <p className='mt-2'>
             Cottage Home Care Services
             </p>
             
            </h2>
            <hr className='mb-6 mt-3 border-t-[1px] border-primary w-16 mx-auto ' />
            
            <p className="text-base text-gray-700 md:text-lg">
            Cottage Home Care Services has a person-led approach and genuinely cares for the welfare and well-being of our patients, aides, and staff. We're like family.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-primary">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Cottage Home Care Services
                </h6>
                <p className="text-sm text-gray-900">
                And now with Cottage Home Care Services, Shivpal is able to provide employment for these women. He boasts, “some of my home aids are making US$80,000 a year.” And even at this height, the young businessman says he is not where he wants to be. “There is so much more to get done, so much more to do to help people,” he said. Apart from his charitable work which is expanding as the business expands, Shivpal is looking to open a senior center for Guyanese in New York. With the property already acquired, he expects to have it up and running in the next three months.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-primary">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Cottage Home Care Services
                </h6>
                <p className="text-sm text-gray-900">

                 Beyond that, he is also interested in transferring his success to oversee equally successful ventures back home in Guyana one such venture is Care guide Enterprise Inc. In so doing, he is keen to open a senior centre, nursing home and dialysis center but fears the lack of structure for post hospitalisation in Guyana. Notwithstanding, he is looking to open a back office, similar to a call center, where Guyanese can gain employment and help support his ventures in New York. Shivpal believes the support of his staff and family along with his personal approach is the bedrock of his success
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
    );
};

export default History;
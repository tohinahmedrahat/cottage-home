import React, { useState } from 'react';

import img from '../../../../src/assets/blog-1.jpg'
import HistoryModal from './HistoryModal';

const History = () => {

  const [newHistory, setHistory] = useState("")

  const history = [
    {
      title: "Businessman and philanthropist Navin Shivpal",
      description: " In January 2020, three months before the start of the COVID-19 lockdown, Guyanese businessman Navin Shivpal acquired an almost bankrupt post hospitalisation care facility in New York city – Cottage Home Care Services – with just 25 patients at the time. Three years later, he has turned the company around and now cares for over 1,000 patients; at the same time, he employs some 1, 200 women, 700 of whom are Guyanese. It is a success story the businessman and philanthropist is most proud of as it amounts to a turnaround of his personal business fortunes also."
    },
    {
      title: "Shivpal left Guyana in 1995 at the age of 13 looking for a better life in NY",
      description: "“New York was also tough,” Shivpal recounted as he glossed over his resettling experience during a recent interview with the News Room. By the age of 18, the young businessman along with his brother got into the restaurant business in Florida with two locations of the seafood eatery High Tide. But a downturn of the economy in 2008 would hurt the business, forcing its closure; a resilient and determined Shivpal turned to healthcare. He later started a training school – Brooklyn Institute of Vocational Training – providing training for hundreds of immigrants, including from Guyana and across the Caribbean, on an annual basis. Some Guyanese and other Caribbean migrants in the New York undergoing training at the Brooklyn Institute for Vocational Training “Some of them don’t even have a high school education. These are women who come and are in need of a job,” Shivpal said. For just under US$500, the Guyanese businessman has been able to use his facility to certify hundreds of women with a license from the Board of Education."
    },
    {
      title: "Cottage Home Care Services",
      description: "And now with Cottage Home Care Services, Shivpal is able to provide employment for these women. He boasts, “some of my home aids are making US$80,000 a year.” And even at this height, the young businessman says he is not where he wants to be. “There is so much more to get done, so much more to do to help people,” he said. Apart from his charitable work which is expanding as the business expands, Shivpal is looking to open a senior center for Guyanese in New York. With the property already acquired, he expects to have it up and running in the next three months. Beyond that, he is also interested in transferring his success to oversee equally successful ventures back home in Guyana one such venture is Care guide Enterprise Inc. In so doing, he is keen to open a senior centre, nursing home and dialysis center but fears the lack of structure for post hospitalisation in Guyana. Notwithstanding, he is looking to open a back office, similar to a call center, where Guyanese can gain employment and help support his ventures in New York. Shivpal believes the support of his staff and family along with his personal approach is the bedrock of his success."
    }
  ]

    const historyHandler =(newHis)=>{

      setHistory(newHis)

    }

    return (
        <div className="px-4 py-16 mx-auto w-[95%]   md:px-24 lg:px-8 lg:pb-20 lg:pt-10">
          <div className="md:w-[70%] w-[95%]  mb-10 mx-auto text-center">
            <h2 className="  font-sans text-3xl font-bold tracking-tight text-gray-700 sm:text-3xl playrify sm:leading-none text-center   ">
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
      <div className="grid gap-7 row-gap-8 lg:grid-cols-6 items-center ">
        <div className="flex flex-col justify-center lg:col-span-4">
          
          <div className="grid gap-5 row-gap-8 lg:grid-cols-3">
            {
              history.map((his,index)=>
              <div
              key={index}
              
              className="bg-white border-l-4 shadow-lg border-primary rounded-md">
              <div className="h-full p-5 border border-l-0 ">
                <h6 className="mb-2 font-semibold leading-5">
                {his?.title}
                </h6>
                <p className='text-base text-gray-900 text-justify source-sans'>
                  {his?.description.slice(0, 300)}
                  
                  
                  <label
                    onClick= {()=>historyHandler(his)}
                    htmlFor="show-history"
                    className="source-sans cursor-pointer pt-3 text-bse font-semibold "
                  >
                    ....See More{" "}
                  </label>
                </p>
                <HistoryModal
                newHistory={newHistory}
                >
                  

                </HistoryModal>
              </div>
            </div>
              )
            }
            
           
          </div>
        </div>
        <div className='lg:col-span-2'>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-80"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
    );
};

export default History;
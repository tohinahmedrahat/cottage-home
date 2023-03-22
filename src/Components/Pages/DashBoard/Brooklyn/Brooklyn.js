import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import OfficeModal from '../OfficeModal/OfficeModal';
import { useQuery } from 'react-query';

const Brooklyn = () => {
    const [message, setMessage] = useState('')


    const url = 'https://cottage-home-care-services-server-site.vercel.app/brooklyn'

    const { data: messages = [], isLoading, refetch } = useQuery({
        queryKey: ['brooklyn',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    const messageHandler = (message)=>{
            setMessage(message)

    }

    // console.log(messages)

    if (isLoading){
        return <Loading></Loading>
    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead className=''>
                        <tr>
                            <th className=''>Serial</th>
                            <th>Date Time</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            messages?.map((message, index) => <tr className="hover"
                                key={message._id}>
                                <th >{index + 1}</th>
                                <td className=' '>{new Date(message.time).toLocaleString()} </td>
                                <td>{message?.name}</td>
                                <td> <a href={`mailto:${message?.email}`} className='text-primary'>{message?.email} </a> </td>
                                

                                <td>

                                    <label


                                        onClick={() => messageHandler(message)}

                                        htmlFor="office-details" className="text-sm bg-primary py-2 px-2 rounded-md text-white shadow-lg">
                                        See Message</label></td>









                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <OfficeModal


                message={message}

            ></OfficeModal>

        </div>
         
    );
};

export default Brooklyn;
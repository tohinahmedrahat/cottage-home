import React,{useState} from 'react';
import { FaUser } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import OfficeModal from '../OfficeModal/OfficeModal';
import OfficeMessage from '../../../Shared/DeleteOfOfficeMessage/OfficeMessage';

const BronxOffice = () => {
    const [message, setMessage] = useState('')


    const url = 'http://localhost:5000/office/Bronx Office'

    const { data: {messages} = [], isLoading, refetch } = useQuery({
        queryKey: ['allmessages',],
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

                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact Office Name</th>
                            <th>Message</th>
                            <th> Delete </th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            messages?.map((message, index) => <tr className="hover"
                                key={message._id}>
                                <th >{index + 1}</th>
                                <td className=' '>{new Date(message.time).toLocaleString()} </td>
                                {/* <td>
                                    <div className="avatar">
                                        <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={message?.img} alt='' />
                                        </div>
                                    </div>
                                </td> */}
                                 {
                                    message?.photoURL == null ?

                                        <>

                                            <td>
                                                <div className="avatar">
                                                    <div className="avatar  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <FaUser className='w-10 h-10' />
                                                    </div>
                                                </div>
                                            </td>


                                        </>
                                        :
                                        <>
                                            <td>
                                                <div className="avatar">
                                                    <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={message?.photoURL} alt='' />
                                                    </div>
                                                </div>
                                            </td>
                                        </>


                                }
                                <td>{message?.name}</td>
                                <td> <a href={`mailto:${message?.email}`} className='text-primary'>{message?.email} </a> </td>
                                <td>{message?.officeName}</td>

                                <td>

                                    <label


                                        onClick={() => messageHandler(message)}

                                        htmlFor="office-details" className="text-sm bg-primary py-2 px-2 rounded-md text-white shadow-lg">
                                        See Message</label></td>

                                        <th>
                                        <OfficeMessage
                                            refetch={refetch}
                                            id={message?._id}
                                            
                                            ></OfficeMessage>
                                        </th>









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

export default BronxOffice;
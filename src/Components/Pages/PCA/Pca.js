import React,{ useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import DashBoardModal from '../DashBoard/DashBoardModal/DashBoardModal';

const Pca = () => {




    const [message, setMessage] = useState('')

    const url = 'https://cottage-home-care-services-server-site.vercel.app/allmessages/PCA'

    const { data: messages = [], isLoading, refetch } = useQuery({
        queryKey: ['PCA',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    const messageHandler = (message)=>{
        setMessage(message)

}


if (isLoading){
    return <Loading></Loading>
}
    return (
        <div >
        

        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Date Time</th>

                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Service Type</th>
                        <th>Inquire Type</th>
                        <th>Subject</th>
                    

                    </tr>
                </thead>
                <tbody>

                    {
                        messages?.map((message, index) => <tr className="hover"
                            key={message._id}>
                            <th>{index + 1}</th>
                            <td className=' '>{new Date(message.time).toLocaleString()} </td>
                            <td>
                                <div className="avatar">
                                    <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={message?.photoURL} alt='' />
                                    </div>
                                </div>
                            </td>
                            <td>{message?.firstName}</td>
                            
                            {/* <td>{message?.email}</td> */}

                            <td> <a href={`mailto:${message?.email}`} className='text-primary'>{message?.email} </a> </td>
                            
                            <td>{message?.phone}</td>
                            <td>{message?.service}</td>
                            <td>{message?.inquiry}</td>
                            <td>
                            <label
                                onClick={()=>messageHandler(message)}

                                    htmlFor="message-details" className="text-sm bg-primary py-2 px-2 rounded-md text-white shadow-lg">
                                        See Message</label>
                                
                                </td>
                            
                            
                            






                        </tr>)
                    }
                </tbody>
            </table>
        </div>

        <DashBoardModal
            
            message={message}

            ></DashBoardModal>
    </div>
    );
};

export default Pca;
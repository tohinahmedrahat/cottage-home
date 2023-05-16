import React,{ useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useQuery } from 'react-query';
import DeleteButton from '../../Shared/DeleteButton/DeleteButton';
import Loading from '../../Shared/Loading/Loading';
import DashBoardModal from '../DashBoard/DashBoardModal/DashBoardModal';
import ReadButton from '../../AllMessages/ReadButton/ReadButton';

const Pca = () => {
    const [message, setMessage] = useState('')
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);


    const url = `https://cottage-home-care-services-server-site.vercel.app/allmessages/PCA?page=${page}&size=${size}`

    const { data: {messages,count} = [], isLoading, refetch } = useQuery({
        queryKey: ['PCA',page,size],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    const pages = Math.ceil(count / size) ;

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
                        <th>Delete</th>
                        <th>Read</th>
                    

                    </tr>
                </thead>
                <tbody>

                    {
                        messages?.map((message, index) => <tr className="hover"
                            key={message._id}>
                            <th>{index + 1}</th>
                            <td className=' '>{new Date(message.time).toLocaleString()} </td>
                            
                                {/* <div className="avatar">
                                    <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={message?.photoURL} alt='' />
                                    </div>
                                </div> */}

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
                                               
                                                    <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        <img src={message?.photoURL} alt='' />
                                                    </div>
                                               
                                            </td>
                                        </>


                                }
                            
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

                                <td>
                                            <DeleteButton
                                            refetch={refetch}
                                            id={message?._id}
                                            
                                            ></DeleteButton>
                                        </td>

                                        <ReadButton
                                        message={message}
                                        refetch={refetch}
                                        >

                                        </ReadButton>
                            
                            
                            






                        </tr>)
                    }
                </tbody>
            </table>
        </div>

        <DashBoardModal
            
            message={message}

            ></DashBoardModal>

<div>
                <p className='text-center mt-10 text-lg font-semibold'>Currently Selected page: <span className='text-primary'>{page + 1}</span></p>
                <div className='pagination my-3 flex justify-center'>
                    {
                        [...Array(pages).keys()].map(number => <button
                            key={number}
                            className={
                                page === number ? 'selected px-3 py-1   text-white ml-3 cursor-pointer custom-shadow'
                                    :
                                    'px-3 py-1   text-gray-500 ml-3 cursor-pointer border-[1px] border-gray-300 hover:bg-[#444444] hover:text-white custom-shadow'

                            }
                            onClick={() => setPage(number)}
                        >
                            {number + 1}


                        </button>)
                    }

                    <select className='ml-3 bg-white text-gray-500 border-[1px] border-gray-300 rounded-md focus:outline-none px-2' onChange={event => setSize(event.target.value)}>
                        <option selected disabled className='hidden'>{`Page Size ${size}`}</option>

                        <option value="5" >Page Size 5</option>
                        <option value="10"  >Page Size 10</option>
                        <option value="15" >Page Size 15</option>
                        <option value="20" >Page Size 20</option>

                    </select>


                </div>
            </div>
    </div>
    );
};

export default Pca;
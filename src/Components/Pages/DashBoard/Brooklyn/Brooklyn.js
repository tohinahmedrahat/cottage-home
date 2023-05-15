import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import OfficeModal from '../OfficeModal/OfficeModal';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';

const Brooklyn = () => {
    const [message, setMessage] = useState('')
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);


    const url = `https://cottage-home-care-services-server-site.vercel.app/brooklyn?page=${page}&size=${size}`

    const { data: { messages, count } = [], isLoading, refetch } = useQuery({
        queryKey: ['brooklyn', page, size],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    const pages = Math.ceil(count / size);

    const messageHandler = (message) => {
        setMessage(message)

    }

    //delete handler

    const deleteHandler = (id) => {

        const proceed = window.confirm(
            "Are you sure, you want to delete this message ?"
        );
        if (proceed) {
            fetch(`https://cottage-home-care-services-server-site.vercel.app/brooklyn/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Message Delete SuccessFully')
                        refetch();

                    }


                })

        }
    }

    // console.log(messages)

    if (isLoading) {
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
                            <th>Delete</th>


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

                                <td>
                                    <button

                                        onClick={() => deleteHandler(message?._id)}

                                        className='uppercase btn  btn-sm bg-red-600 text-white'>
                                        delete
                                    </button>
                                </td>









                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <OfficeModal


                message={message}

            ></OfficeModal>

            <div>
                <div>
                    <p className='text-center mt-10 text-lg font-semibold'>Currently Selected page: <span className='text-primary'>{page + 1}</span></p>
                    <div className='pagination my-3 flex justify-center'>
                        {
                            [...Array(pages).keys()].map(number => <button
                                key={number}
                                className={
                                    page === number ? 'selected btn btn-sm text-white ml-3'
                                        :
                                        'btn btn-sm btn-primary ml-3 text-white'

                                }
                                onClick={() => setPage(number)}
                            >
                                {number + 1}


                            </button>)
                        }

                        {
                            messages?.length <= 0 ? <>

                                <select className='ml-3 bg-primary text-white rounded-md focus:outline-none px-2 py-2' onChange={event => setSize(event.target.value)}>
                                    <option selected disabled>{`Page Size ${size}`}</option>

                                    <option value="5" >Page Size 5</option>
                                    <option value="10"  >Page Size 10</option>
                                    <option value="15" >Page Size 15</option>
                                    <option value="20" >Page Size 20</option>

                                </select>
                            </>
                                :
                                <>
                                    <select className='ml-3 bg-primary text-white rounded-md focus:outline-none px-2 ' onChange={event => setSize(event.target.value)}>
                                        <option selected disabled>{`Page Size ${size}`}</option>

                                        <option value="5" >Page Size 5</option>
                                        <option value="10"  >Page Size 10</option>
                                        <option value="15" >Page Size 15</option>
                                        <option value="20" >Page Size 20</option>

                                    </select>

                                </>
                        }


                    </div>
                </div>
            </div>

        </div>

    );
};

export default Brooklyn;
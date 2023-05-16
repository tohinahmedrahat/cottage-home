import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const AllUsers = () => {

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);

    const url = 'https://cottage-home-care-services-server-site.vercel.app/users'

    const { data: {users,count} = [], isLoading, refetch } = useQuery({
        queryKey: ['users', page, size],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })


    const pages = Math.ceil(count / size);
    // console.log(messages)

    if (isLoading) {
        return <Loading></Loading>
    }


    const deleteHandler = (user) => {

        const proceed = window.confirm(
            `Are you sure, you want to delete ${user?.name} ?`
        );
        if (proceed) {
            fetch(`https://cottage-home-care-services-server-site.vercel.app/users/${user?._id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('User Delete SuccessFully')
                        refetch();

                    }


                })

        }
    }


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead className=''>
                        <tr>
                            <th className=''>Serial</th>
                            <th>User Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Delete</th>






                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) => <tr className="hover"
                                key={user._id}>
                                <th >{index + 1}</th>
                                <td>{user?.name}</td>
                                {
                                    user?.photoURL === null ?

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
                                                        <img src={user?.photoURL} alt='' />
                                                    </div>
                                                </div>
                                            </td>
                                        </>


                                }



                                <td>{user?.email}</td>
                                <td>
                                    <button

                                        onClick={() => deleteHandler(user)}

                                        className='btn btn-sm bg-red-600 uppercase text-white'>
                                        delete

                                    </button>

                                </td>



                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
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

export default AllUsers;
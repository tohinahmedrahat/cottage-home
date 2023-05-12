import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const AllUsers = () => {

    const url = 'http://localhost:5000/users'

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })



    // console.log(messages)

    if (isLoading) {
        return <Loading></Loading>
    }


    const deleteHandler = (user) => {

        const proceed = window.confirm(
            `Are you sure, you want to delete ${user?.name} ?`
        );
        if (proceed) {
            fetch(`http://localhost:5000/users/${user?._id}`, {
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


        </div>
    );
};

export default AllUsers;
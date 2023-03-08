import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';

const AllUsers = () => {

    const url = 'https://cottage-home-care-services-server-site.vercel.app/users'

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    

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
                            <th>User Name</th>
                            <th>Image</th>
                            <th>Email</th>
                         
                            
                            
                        

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) => <tr className="hover"
                                key={user._id}>
                                <th >{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="avatar w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} alt='' />
                                        </div>
                                    </div>
                                </td>
                                
                                
                                <td>{user?.email}</td>
                                


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            
        </div>
    );
};

export default AllUsers;
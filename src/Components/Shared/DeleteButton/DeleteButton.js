import React from 'react';
import { toast } from 'react-hot-toast';

const DeleteButton = ({ refetch, id }) => {
    const deleteHandler = (id) => {

        const proceed = window.confirm(
            "Are you sure, you want to delete this message ?"
        );
        if (proceed) {
            fetch(`http://localhost:5000/messages/${id}`, {
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

            <button

                onClick={() => deleteHandler(id)}

                className='uppercase btn  btn-sm bg-red-600 text-white'>
                delete
            </button>

        </div>
    );
};

export default DeleteButton;
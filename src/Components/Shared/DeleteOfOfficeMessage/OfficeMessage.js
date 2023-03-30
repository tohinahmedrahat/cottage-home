import React from 'react';
import { toast } from 'react-hot-toast';

const OfficeMessage = ({refetch, id}) => {
    const deleteHandler = (id) =>{

        const proceed = window.confirm(
            "Are you sure, you want to delete this message ?"
        );
        if (proceed) {
            fetch(`https://cottage-home-care-services-server-site.vercel.app/officeMessages/${id}`, {
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
            
            onClick={()=>deleteHandler(id)}

            className='uppercase btn  btn-sm bg-red-600 text-white'>
                delete
            </button>
            
        </div>
    );
};

export default OfficeMessage;
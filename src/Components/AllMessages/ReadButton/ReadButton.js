import React from 'react';
import { toast } from 'react-hot-toast';

const ReadButton = ({message,refetch}) => {

    const readStatus = (id) => {
        fetch(`https://cottage-home-care-services-server-site.vercel.app/message/read/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Read Successfully')
                    refetch();
                }
            })

    }
    return (
        <div>
            {
                                    message?.read === 'true' ?

                                        <>
                                            <td>
                                                <div className="form-control">
                                                    <label className="cursor-pointer label">

                                                        <input type="checkbox" checked className="checkbox checkbox-success" />
                                                    </label>
                                                </div>
                                            </td>

                                        </>
                                        :
                                        <>
                                            <td>
                                                <div className="form-control">
                                                    <label

                                                        onClick={() => readStatus(message._id)}

                                                        className="cursor-pointer label cursor-pointer">
                                                        <input type="checkbox" checked className="checkbox checkbox-warning" />
                                                    </label>
                                                </div>
                                            </td>

                                        </>
                                }
        </div>
    );
};

export default ReadButton;
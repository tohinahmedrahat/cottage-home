import React from 'react';

const Modal = ({office}) => {
    return (
        <div >
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-[#EBF8F9]">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> {office?.name}</h3>

                    <form  className='grid grid-cols-1 gap-3 mt-10'>
                        

                        <input name='name'  type="text" placeholder="Your name" className="input w-full  input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full  input-bordered" />
                        <textarea name="message" className="textarea textarea-bordered" placeholder="Message" required></textarea>
                       <br />
                        <input disabled={""} type="submit" value="submit" className="input w-full  input-bordered btn bg-primary hover:bg-[#2E2A4D] text-white" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Modal;
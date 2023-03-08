import React,{useContext} from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ContactInfo from '../ContactInfo';

const Modal = ({office,setModalData}) => {
    const { user } = useContext(AuthContext)

    console.log(user)

    const date = Date.now(); 

    const submitHandler = ( event)=>{

            event.preventDefault();

            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;

            const contactInfo = {
                name,
                img: user?.photoURL,
                email,
                message,
                officeName :office?.name,
                time:date
            }

            // console.log(contactInfo)
            fetch('https://cottage-home-care-services-server-site.vercel.app/officeMessages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        })
            .then(res => res.json())
            .then(data => {
               console.log(data)
                if (data.acknowledged) {
                    toast.success(`Message Send to the ${office?.name} Successfully`)
                   form.reset()
                   setModalData(false)
                    
                }

            })




    }


    return (
        <div >
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-[#EBF8F9]">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold uppercase">Contact The {office?.name}</h3>

                    <form 

                    onSubmit={submitHandler}
                    
                    className='grid grid-cols-1 gap-3 mt-10'>
                        

                        <input defaultValue={user?.displayName} readOnly name='name'  type="text" placeholder="Your name" className="input w-full  input-bordered" required />
                        <input defaultValue={user?.email} readOnly name='email' type="email" placeholder="Email Address" className="input w-full  input-bordered" required />
                        <textarea name="message" className="textarea textarea-bordered" placeholder="Message" required></textarea>
                       <br />
                        <input disabled={""} type="submit" value="submit" className="input w-full  input-bordered btn bg-primary hover:bg-[#2E2A4D] text-white" required />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Modal;
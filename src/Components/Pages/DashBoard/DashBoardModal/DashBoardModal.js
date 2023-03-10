import React from 'react';

const DashBoardModal = ({message}) => {

    const {firstName,subject} = message

    // console.log(message)
    
    return (
        <div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="message-details" className="modal-toggle" />
<div className="modal ">
  {
    subject?.length >= 300 ?
     <>
     <div className="modal-box relative   md:w-11/12 md:max-w-5xl ">
    <label htmlFor="message-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold px-4 mt-4"> Message From {firstName} </h3>
    <p className="text-justify  px-4 mt-2"> 

        {subject}
    
    </p>
  </div>
    </>
    :
    <>
       <div className="modal-box relative  ">
    <label htmlFor="message-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold px-4 mt-4"> Message From {firstName} </h3>
    <p className="text-justify  px-4 mt-2"> 

        {subject}
    
    </p>
  </div>
    
    </>
  }
</div>
        </div>
    );
};

export default DashBoardModal;
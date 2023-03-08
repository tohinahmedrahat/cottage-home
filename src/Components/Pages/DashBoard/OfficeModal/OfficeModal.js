import React from 'react';

const OfficeModal = ({message}) => {
    return (
        <div>
            <div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="office-details" className="modal-toggle" />
<div className="modal z-50">
  <div className="modal-box relative  mt-[16vh] ">
    <label htmlFor="office-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold px-4 mt-4"> Message From {message?.name} </h3>
    <p className="text-justify  px-4 mt-2"> 

        {message?.message}
    
    </p>
  </div>
</div>
        </div>
        </div>
    );
};

export default OfficeModal;
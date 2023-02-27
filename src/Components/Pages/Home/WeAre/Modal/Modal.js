import React from 'react';

const Modal = ({details}) => {
    const {title, description} = details
    return (
        <div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="show-details" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative ">
    <label htmlFor="show-details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold px-4 mt-4"> {title} </h3>
    <p className="text-justify  px-4 mt-2">{description}</p>
  </div>
</div>
        </div>
    );
};

export default Modal;
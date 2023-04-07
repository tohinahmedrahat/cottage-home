import React from 'react';

const HistoryModal = ({newHistory}) => {
    const {title, description} = newHistory
    return (
        <div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="show-history" className="modal-toggle" />
<div className="modal  ">
  <div className="modal-box relative">
    <label htmlFor="show-history" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold px-4 mt-4"> {title} </h3>
    <p className="text-justify  px-4 mt-2">{description}</p>
  </div>
</div>
        </div>
    );
};

export default HistoryModal;

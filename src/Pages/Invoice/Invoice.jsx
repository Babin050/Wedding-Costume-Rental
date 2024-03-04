import React, { useContext, useRef, useState } from "react";
import "../Invoice/Invoice.css";
import truck from "../Invoice/image/delivery-truck.png";
import { Provider } from "../../Components/Condext";

const Invoice = () => {
  const {totalprice} = useContext(Provider)
  console.log(totalprice,'totalprice')
  const printRef = useRef(null);

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = content;

    window.print();

    document.body.innerHTML = originalContents;
  };


  return (
    <div className="containeeer">
      <div className="invoice-border" ref={printRef}>
        <h2 className="txt">
          Delivery Details
          <img className="truck" src={truck} alt="" />
        </h2>
        <div className="input-div-1">
          <input className="input-div" type="text" placeholder="Phone Number" />
        </div>
        <div className="input-div-2">
          <input className="input-div" type="text" placeholder="Address" />
        </div>
        <div className="input-div-3">
          <input className="input-div" type="text" placeholder="Pincode" />
        </div>
        <div className="input-div-4">
          <input className="input-div" type="text" placeholder="delivery fee" />
        </div>

        <h2 className="txt">Price Details</h2>
        <div className="input-div-1">
        <input className="input-div" type="text" placeholder="Total MRP" />
        </div>
        <div className="input-div-2">
        <input className="input-div" type="text" placeholder="Discount" />
        </div>
        <div className="input-div-3">
        <input className="input-div" type="text" placeholder="Total amount" />
        </div>
       

        <div className="invoice-btn">
          <button className="continue" onClick={ handlePrint}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

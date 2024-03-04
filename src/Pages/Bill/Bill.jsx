import React from 'react'
import '../Bill/Bill.css'

const Bill = () => {
  return (
    <div className='bill'>
        <div className="bill-border" >
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
        </div>
        
    </div>
  )
}

export default Bill
import React, { useContext, useState } from 'react'
import { Provider } from '../Components/Condext'

const Search = () => {

 const {searchItem,} = useContext(Provider)
 console.log(asdfg,"searchItem")
  return (
    <div>
           {/* <div className="container"> */}

    

{Search.map((item) => (
 
  <div className="sub-div" onClick={()=>setProductDetails(item)}>
    {/* key={item.id} */}
    <div className="img-div">
    <Link className="link" to={`/product/${item.id}`}>
      <img className="pic" src={item.pic} alt="" />
      </Link>
    </div>
    <div>
    <div className="card-name">
    <Link className="link" to={`/product/${item.id}`}>
        <span>{item.name}</span>
      </Link>
      <span>Price:₹{item.price}</span>
      <span> Available:{item.Availability}</span>
      <span>Brand:{item.Brand}</span>
    </div>
    </div>
    
    {/* <button className="bbtn" onClick={() => addto(item)}
    disabled={cart.some((data)=> data.id === item.id)}>
     {cart.some((data)=> data.id === item.id) ? "Added" : " View product"} 
    </button> */}
    
  </div>
 
))}
</div>
       
    // </div>
  )
}

export default Search
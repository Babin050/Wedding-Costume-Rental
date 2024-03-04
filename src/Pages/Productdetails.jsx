import React, { useContext, useEffect, useState } from 'react'
import { Provider } from '../Components/Condext'
import { Link, useParams } from 'react-router-dom'
import '../Pages/Style.css'

const Productdetails = () => {

  const {productdetalis,addto,cart,value,setCart,product}=useContext(Provider);
  // console.log(Provider)
  const {productId} = useParams();
  
  console.log(productId,"id");

  const products = value.data;
    // console.log(products);
  const selectedProduct = products.filter(product =>product.id == productId );



  console.log(selectedProduct,"sel");

  

 
  return (
    <div className='pdt-dtls'>
         {selectedProduct.map((item) => (
        <div className="subbb-div" >
          <div className='imggg-div'>
            <img className="picc" src={item.pic} alt="" />
          </div>
          <div className="crd-div">
             {/* <div className="carddd-name"> */}
            <span className='naame'>{item.name}</span>
            <span className='price'>Price:₹{item.price}</span>
            <span className='des'>Description:{item.Description}</span>
            <span className='avlble'> Available:{item.Availability}</span>
            <span className='brand'>Brand:{item.Brand}</span>
          
           <Link to='/Cart'>
            
          <button className="btn" onClick={()=>setCart([...cart,item])}
          disabled={cart.some((data)=> data.id === item.id)}>
           {cart.some((data)=> data.id === item.id) ? "Added" : " Add to cart"} 
          </button>
          
          </Link>
          <Link to='/Invoice'>
          <button className='buy-btn'>Buy Now</button>
          </Link>
          </div> 
          {/* </div> */}
         
        </div>
      ))}
     
        
     </div>
  )
 }      

export default Productdetails
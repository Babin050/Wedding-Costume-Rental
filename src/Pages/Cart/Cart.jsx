import React, { useContext, useEffect, useState } from 'react'
import '../Cart/Cart.css'
import { Provider } from '../../Components/Condext'
import { Link } from 'react-router-dom'
// import Product from '../Product/Product'
// import { Link } from 'react-router-dom'

function Cart() {
  const {cart,setCart,totalPrice} = useContext(Provider)
  // const [order,setOrder] = useState([])

  console.log(" cart",cart)

  // const incrementQuantity = (item) => {
  //   if (item.quantity < 10) {
  //     setCart((prev) =>
  //     prev.map((Product)=>
  //     Product.id === item.id ? {...Product,quantity:Product.quantity +1} : Product
  //     )
  //     )
  //   }
  // };

  // const decrementQuantity = (item) => {
  //   if (item.quantity > 0) {
  //     setCart((prev) =>
  //     prev.map((Product)=>
  //     Product.id === item.id ? {...Product,quantity:Product.quantity -1} : Product
  //     )
  //     )
  //   }
  // };
 

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);
  


  return (
    
  <>
    <div className='cart' >
      <h5>Total : {totalPrice}.00</h5>
          {cart.map((item)=>(

            
           
        <div className='subb-div'>
          
          <div className='imgg-div'>
          <img className='piccc'src={item.pic} alt="" />
          </div>
          <div className='cardd-name'>
          <span >{item.name}</span>
          <span>Price:₹{item.price}</span>
          <span >Available: {item.Availability}</span>
          <span >Brand:{item.Brand}</span>
          {/* <div className="quantity">
            <button onClick={()=>decrementQuantity(item)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={()=>incrementQuantity(item)}>+</button>
          </div> */}

        </div>
        <div className='remove-btn'>
        <button className='remove' onClick={()=>setCart(cart.filter((pre)=>pre.id !== item.id))}>remove from Cart</button>
        </div>
       
        
        </div>
       
        
        
     
       
       
      
        
      ))}
      <Link to='/Bill'  style={{textDecoration:"none"}}>
        <div className='check-btn' >
         <button className='check'>check out</button>
         </div>
         </Link>
        

       </div>
      
     
      
      
     
      
     
    
    </>
    
  )
}

export default Cart
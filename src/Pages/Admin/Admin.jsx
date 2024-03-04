import React, { useEffect, useState } from 'react'

const Admin = () => {
  // State to store the cart data
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  

  return (
    <div>
        
    </div>
  )
}

export default Admin
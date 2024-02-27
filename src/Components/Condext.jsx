import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Provider = createContext();

const Condext = ({ children }) => {
  const [value, setValue] = useState([]);
  const [user, setUesr] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState([]);
  const [totalprice,setTotalPrice] = useState(0);

  const [productdetalis, setProductDetails] = useState(null);

  const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:3010/api/babin");
      const data = res.data;
      setValue(data);
    //   console.log(data, "running");
      //    setUsers(data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  console.log(value,'nisham');

  return (
    <div>
      <Provider.Provider
        value={{
            value,
            setValue,
          user,
          setUesr,
          cart,
          setCart,
          productdetalis,
          setProductDetails,
          totalPrice,
          setTotalPrice,
          search,
          setSearch,
         
        }}
      >
        {children}
      </Provider.Provider>
    </div>
  );
};

export default Condext;

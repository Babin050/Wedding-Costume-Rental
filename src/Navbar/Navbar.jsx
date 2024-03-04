import React, { useContext, useState } from "react";
import "../Navbar/Navbar.css";
import pic1 from "../Navbar/img/loupe.png";
import { Link, Outlet } from "react-router-dom";
import pic2 from "../Navbar/img/grocery.png";
import pic3 from "../Navbar/img/user.png";
import pic4 from "../Navbar/img/home.png";
import { Provider } from "../Components/Condext";

const Navbar = () => {
  const { value } = useContext(Provider);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const [inputValue, setInputValue] = useState("");

  // console.log("items,,,,", value);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // console.log("asdfghjklkjhgfds", inputValue);

  const searchFunction = () => {
    // Define a function called searchFunction
    const searchItem = value.filter((item) => item.type === inputValue); // Filter the array value based on item.type matching inputValue
    console.log("searchItem-----", searchItem); // Log the filtered result to the console
  };

  return (
    <>
      <div className="sub-navbar-1">
        <div className="sub-1">
          <Link className="link" to="/">
            <span className="head-name">WEDDING CENTER</span>
          </Link>
        </div>

        <div className="input">
          <input
            className="btttn"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search product..."
          />
          <img onClick={searchFunction} className="img" src={pic1} alt="" />
        </div>
        {/* <div className='icons-div'> */}
        <div className="box">
          <Link to="/" style={{ textDecoration: "none",color:"black" }}>
            <div
              className="home-div"
              onMouseEnter={() => handleMouseEnter("Home")}
              onMouseLeave={handleMouseLeave}
            >
              <img className="img4" src={pic4} alt="" />

              {hoveredItem === "Home" && <span>Home</span>}
            </div>
          </Link>

          <Link to="cart" style={{ textDecoration: "none" ,color:"black" }}>
            <div
              className="cart-img"
              onMouseEnter={() => handleMouseEnter("Cart")}
              onMouseLeave={handleMouseLeave}
            >
              <img className="img2" src={pic2} alt="" />
              {hoveredItem === "Cart" && <span>Cart</span>}
            </div>
          </Link>
          <Link to="Login" style={{ textDecoration: "none" ,color:"black" }}>
            <div
              className="login-img"
              onMouseEnter={() => handleMouseEnter("Login")}
              onMouseLeave={handleMouseLeave}
            >
              <img className="img3" src={pic3} alt="" />
              {hoveredItem === "Login" && <span>Login</span>}
            </div>
          </Link>
          {/* </div> */}
        </div>
      </div>

      <div className="nisham">
        <div className="sub-navbar-2">
          <div className="sub-2">
            <Link className="link" to="/">
              <p>Home</p>
            </Link>
            <Link className="link" to="/Product">
              <p>Product</p>
            </Link>

            <Link className="link" to="/Cart">
              <p> Cart</p>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import "../Navbar/Navbar.css";
import pic1 from "../Navbar/img/loupe.png";
import { Link } from "react-router-dom";
import pic2 from "../Navbar/img/grocery.png";
import pic3 from "../Navbar/img/user.png";
import pic4 from "../Navbar/img/home.png";
import { Provider } from "../Components/Condext";

const Navbar = () => {
  const { value } = useContext(Provider);

  const [inputValue, setInputValue] = useState("");

  // console.log("items,,,,", value);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // console.log("asdfghjklkjhgfds", inputValue);

  const searchFunction = () => {
    const searchItem = value.filter((item) => item.type === inputValue);
    // console.log("searchItem-----", searchItem);
    
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
          <div className="home-div">
            <Link to="/">
              <img className="img4" src={pic4} alt="" />
              <span className="homtext">Home</span>
            </Link>
          </div>
          <Link to="cart">
            <div className="cart-img">
              <img className="img2" src={pic2} alt="" />
              <span className="homtext">Cart</span>
            </div>
          </Link>
          <Link to="Login">
            <div className="login-img">
              <img className="img3" src={pic3} alt="" />
              <span className="homtext">Login</span>
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
      </div>
    </>
  );
};

export default Navbar;

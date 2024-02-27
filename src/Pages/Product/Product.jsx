import React from "react";
import { useContext } from "react";
import { Provider } from "../../Components/Condext";
import "../Product/Product.css";
import { Link, useNavigate } from "react-router-dom";
import picccc from '../Product/img/D-1.0-UHP-15022024-MainBannerDailyChanging-Z1-P1-GFS-4080.gif'
import picccc2 from '../Product/img/1-pc_1._CB575777439_.png'
import picccc1 from '../Product/img/pc._SX3000_QL85_.jpg'

const Product = () => {
  const { value, cart, setCart, setProductDetails, productdetalis } =
    useContext(Provider);
  // console.log(name,"ghjk")

  const navigation = useNavigate();

  const products = value.data;
  // console.log(products);

  const addto = (item) => {
    navigation(`/productDetails/${item.id}`);
  };

  // console.log("heloo", productdetalis);

  return (
    <>
    {/* <div className="bg-colorrr"> */}
      <div className="container">
        <div className="advt-div">
          {/* <div className="advt"> */}
          <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={picccc} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={picccc1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={picccc2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

          {/* </div> */}

        </div>
        
        {products && products.map((item) => (
       
          <div className="sub-div" onClick={() => setProductDetails(item)}>
            <div className="img-div">
              <Link className="link" to={`/product/${item.id}`}>
                <img className="pic" src={item.pic} alt="" />
              </Link>
            </div>
            
            <div>
              <div className="card-name">
                <Link className="link" to={`/product/${item.id}`}>
                  <span >{item.name}</span>
                </Link>
                <span>Price:₹{item.price}</span>
                <span > Available:{item.Availability}</span>
                <span >Brand:{item.Brand}</span>
              </div>
            </div>
            <button
              className="bbtn"
              onClick={() => addto(item)}
              disabled={cart.some((data) => data.id === item.id)}
            >
              {cart.some((data) => data.id === item.id)
                ? "Added"
                : " View product"}
            </button>
          </div>
          
        ))}
       </div>
      {/* </div> */}
    </>
  );
};

export default Product;

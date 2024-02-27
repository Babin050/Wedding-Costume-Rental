import "./App.css";
import Condext from "./Components/Condext";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";

import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import Productdetails from "./Pages/Productdetails";
import Invoice from "./Pages/Invoice/Invoice";

function App() {
  return (
 
      <Condext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/productDetails/:productId"
              element={<Productdetails />}
            />

            <Route path="/product" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />

            <Route path="Login" element={<Login />} />
            <Route path="/Invoice" element={<Invoice />} />
          
          </Routes>
        </BrowserRouter>
      </Condext>
  
  );
}

export default App;

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
import Bill from "./Pages/Bill/Bill";
import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <Condext>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route  element={<Navbar/>}>
            <Route path="/Home" element={<Home />} />
            <Route
              path="/productDetails/:productId"
              element={<Productdetails />}
            />

            <Route path="/product" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />

            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/Bill" element={<Bill />} />
            <Route path="/Admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Condext>
  );
}

export default App;

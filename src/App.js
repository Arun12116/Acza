import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Product from "./Components/Pages/Product/Product"
import Cart from "./Components/Pages/Cart/Cart"
import { Routes, Route } from "react-router-dom"
import ProductDeatiles from "./Components/Pages/ProductDeatiles/ProductDeatiles";
import { useState } from "react";
import Login from "./Components/Login/Login";
function App() {
  const [isLoggin, setIsLoggin] = useState(false)
  return (
    <>
      {

        isLoggin ? <Navbar setIsLoggin={setIsLoggin} /> : <Login setLoggin={setIsLoggin} />
      }

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductDeatiles/:id" element={<ProductDeatiles />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>

    </>
  );
}

export default App;

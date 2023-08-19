
import Home from "./Components/Pages/Home/Home";
import Product from "./Components/Pages/Product/Product"
import Cart from "./Components/Pages/Cart/Cart"
import { Routes, Route } from "react-router-dom"
import ProductDeatiles from "./Components/Pages/ProductDeatiles/ProductDeatiles";
import { useState } from "react";
import Sinup from "./Components/Pages/SinupPage/Sinup";
import Login from "./Components/Pages/Login/Login";
function App() {
  const [isLoggin, setIsLoggin] = useState(true)
  return (
    <>
      {
        isLoggin ? <Sinup  setIsLoggin={setIsLoggin}/> : <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductDeatiles/:id" element={<ProductDeatiles />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login/>} />


        </Routes>
      }
    </>
  );
}

export default App;

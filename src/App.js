import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/LoginPage/Login"
import Product from "./Components/Pages/Product/Product"
import Cart from "./Components/Pages/Cart/Cart"
import { Routes, Route } from "react-router-dom"
import ProductDeatiles from "./Components/Pages/ProductDeatiles/ProductDeatiles";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductDeatiles/:id" element={<ProductDeatiles />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />



      </Routes>

    </>
  );
}

export default App;

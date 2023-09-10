
import Home from "./Components/Pages/Home/Home";
import Cart from "./Components/Pages/Cart/Cart"
import { Routes, Route } from "react-router-dom"
import ProductDeatiles from "./Components/Pages/ProductDeatiles/ProductDeatiles";
import Login from "./Components/Pages/Login/Login";
import Sinup from "./Components/Pages/SinupPage/Sinup";
import Page404 from "./Components/Pages/404Page/Page404";

import Contact from "./Components/Pages/Contact/Contact";

import Protected from "./Components/ProtectedRoutes/Protected";
import Product from "./Components/Pages/Product/Product";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProductDeatiles/:id" element={<ProductDeatiles />} />
        <Route path="/Cart" element={<Protected  Components={Cart} />} />
        <Route path="/allProduct" element={<Protected Components={Product} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sinup" element={<Sinup/>} />
        <Route path="/*" element={<Page404 />} />

      </Routes>

    </>
  );
}

export default App;

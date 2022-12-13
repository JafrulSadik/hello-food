import { Route, Routes } from "react-router-dom";
// import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";

import AdminHome from "./admin/AdminHome";

import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/productDetails" element={<ProductDetails/>} />

      {/* <Route path="/cart" element = {<Cart/>} /> */}
      
      <Route path="/admin" element={<AdminHome/>}/>
    </Routes>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyOrders from "./pages/MyOrders";
import Prodcuts from "./pages/Prodcuts";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories/:products" element={<Prodcuts />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/account" element={<Account />} />
      <Route path="/my-orders" element={<MyOrders />} />
    </Routes>
  );
};

export default App;

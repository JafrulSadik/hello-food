import { Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AdminHome from "./admin/pages/AdminHome";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyOrders from "./pages/MyOrders";
import MyReturns from "./pages/MyReturns";
import Order from "./pages/Order";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Prodcuts from "./pages/Prodcuts";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Sidebar from './admin/components/Sidebar'
import AdminProducts from "./admin/pages/AdminProducts";
import Orders from "./admin/pages/Orders";
import Users from "./admin/pages/Users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const AdminLayout = ({children}) => (
    <>
      <Sidebar>
        {children}
        <Outlet />
      </Sidebar>
    </>
  )
  return (
    <AppContainer >
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories/:products" element={<Prodcuts />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/account" element={<Account />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/my-returns" element={<MyReturns />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
    <ToastContainer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  -webkit-tap-highlight-color: transparent;
`

export default App;

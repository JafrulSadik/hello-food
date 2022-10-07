import React from "react";
import AllProducts from "../components/AllProducts";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MobileMenu/>
      <Carousel />
      <Categories />
      <AllProducts />
    </div>
  );

};

export default Home;

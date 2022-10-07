import React from "react";
import AllProducts from "../components/AllProducts";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import GroceryProducts from "../components/GroceryProducts";
import HairCareProducts from "../components/HairCareProducts";
import MedicinalHerbsProducts from "../components/MedicinalHerbsProducts";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import SkinCareProducts from "../components/SkinCareProducts";
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MobileMenu/>
      {/* <Carousel /> */}
      <Categories />
      <AllProducts />
      <GroceryProducts />
      <HairCareProducts />
      <MedicinalHerbsProducts />
      <SkinCareProducts />
    </div>
  );

};

export default Home;

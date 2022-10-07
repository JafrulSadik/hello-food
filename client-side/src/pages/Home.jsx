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

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <MobileMenu/>
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

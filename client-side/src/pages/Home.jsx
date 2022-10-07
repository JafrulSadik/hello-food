import React from "react";
import Carousel from "../components/Carousel";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <MobileMenu/>
    </div>
  );

};

export default Home;

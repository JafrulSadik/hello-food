import React from "react";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MobileMenu/>
    </div>
  );

};

export default Home;

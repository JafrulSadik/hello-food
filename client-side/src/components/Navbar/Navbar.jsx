import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../images/hello_food.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="H_container">
      <div className="H_logo">
        <img className="nav_logo"
          src={logo}
          alt=""
        />
      </div>

      <form className="H_search">
        <span className="icon_search"><AiOutlineSearch/></span>
        <input type="text" placeholder="Search here" />
        <button>Search</button>
      </form>

      <div className="H_link">
        <a href="#cart">
          <span className="icon" >
            <FaShoppingCart></FaShoppingCart>
            
          </span>
          <p>Cart</p>
        </a>
        <a href="#account" >
          <span className="icon"> <CgProfile/></span>
          <p>Account</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

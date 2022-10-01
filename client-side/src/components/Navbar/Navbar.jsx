import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div>
        <img
          src="https://w7.pngwing.com/pngs/512/403/png-transparent-demo-app-google-play-android-b-blue-text-logo.png"
          alt=""
        />
      </div>

      <div className="search">
        <input type="text" placeholder="Search here" />
        {}
        <button>
          <AiOutlineSearch />
        </button>
      </div>

      <div>
        <a href="#cart">
          <span>
            <AiOutlineShoppingCart className="icon" />
          </span>
          Cart
        </a>

        <a href="#account">
          <span>
            <VscAccount className="icon" />
          </span>
          Account
        </a>
      </div>
    </div>
  );
};

export default Navbar;

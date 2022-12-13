import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/hello_food.png";
import { sidebarItems } from "../AdminData";

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState(0)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarContainer>
        <div style={{ width: isOpen ? "250px" : "80px" }} className="sidenav">
          <div className="top">
            <Link
              className="admin-page-logo" to='/'
              style={{ display: isOpen ? "block" : "none" }}
            >
              <img src={logo} alt="logo" />
            </Link>
            <div
              className="hamburgerDiv"
              style={{ marginLeft: isOpen ? "120px" : "5px" }}
            >
              <GiHamburgerMenu className="hamburger" onClick={toggle} />
            </div>
          </div>
          {sidebarItems.map((item, index) => (
              <Link className={index === active ? 'anchor active' : 'anchor'} to={item.path} key={index} onClick={() => setActive(index)}>
                <div className="icon">{item.icon}</div>
                {isOpen && <div className="title">{item.title}</div>}
              </Link>
          ))}
        </div>
        <main style={{paddingLeft: isOpen ? '270px' : '80px', transition: "all .5s" }} className='maindiv'>
          {children}  
        </main>
      </SidebarContainer>
    </>
  );
};

const SidebarContainer = styled.div`
  .sidenav {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    /* background-color: #1f1a1a; */
    background-color: #eaeaf1;
    overflow-x: hidden;
    transition: 0.5s;
  }

  .top {
    display: flex;
    justify-content: space-around;
    margin: 20px;
    height: 60px;
  }

  .admin-page-logo > img {
    height: 50px;
    width: 80px;
  }

  .sidenav > .anchor {
    padding: 8px 8px 8px 17px;
    text-decoration: none;
    font-size: 25px;
    color: #3b3737;
    display: flex;
    gap: 10px;
    align-items: center;
    transition: 0.3s;
    margin: 10px;
    border-radius: 10px;
  }

  .sidenav > .active {
    /* background-color: #b96666; */
    background-color: green;
    color: white;
    &:hover {
      color: white !important;
    }
  }

  .sidenav > .anchor:hover {
    color: black;
  }

  .hamburgerDiv {
    transition: margin-left 0.5s;
    padding-top: 20px;
  }
  .hamburger {
    color: black;
    cursor: pointer;
    font-size: 25px;
  }
`;

export default Sidebar;

import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import styled from "styled-components";
import logo from "../images/hello_food.png";

const Footer = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="logoSec">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="followUs">
            <h4>
              <span>Follow Us</span>
            </h4>
            <ul>
              <li>
                <a href="...">
                  <AiOutlineFacebook className="facebook" />
                </a>
              </li>
              <li className="whatsapp">
                <a href="...">
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="youtube">
                <a href="...">
                  <AiOutlineYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="company">
          <h3><span>Company</span></h3>
          <ul>
            <li><a href="..">About Us</a></li>
            <li><a href="..">Privacy Policy</a></li>
            <li><a href="...">Terms & Condition</a></li>
          </ul>
        </div>
        <div className="addressSec">
          <h3><span>Contact Us</span></h3>
          <ul>
            <li>Address : Holding-08, East Tejturi Bazar, Tejgaon, Dhaka</li>
            <li>Email Us : hellofood02@gmail.com</li>
            <li>Hotline No : 8801611456116</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100%; 
  width: 100%; 
  border-top: 1px solid lightgray;
  background-color: #0D0D0D;
  color: white;
  .wrapper {
    display: flex;
    flex-direction: row;
    padding: 30px;
    justify-content: space-between;
  }
  .logoSec {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    flex: 1;
  }
  .logo {
    height: 100%;
    width: 100%;
  }
  .logo img {
    height: 60px;
    width: 100px;
  }
  .followUs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }
  .followUs h4 {
    font-size: 16px;
  }
 .followUs h4 span {
    border-bottom: 2px solid green;
 }
 .followUs ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 25px;
 }
 .followUs ul li {
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .company {
  flex: 1;
 }
 .company h3 {
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 20px;

 }
 .company h3 span {
  border-bottom: 2px solid green;
 }
 .company ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
 }
 .company a {
  text-decoration: none;
  color: white;
  cursor: pointer;
 }
 .addressSec {
  flex: 1;
 }
 .addressSec h3 {
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 20px;
 }
 .addressSec h3 span {
  border-bottom: 2px solid green;
 }
 .addressSec ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
 }
 
`;

export default Footer;

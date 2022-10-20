import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Register = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="wrapper">
          <form className="loginForm">
            <h2>Create Account</h2>
            <label for="email">Name</label>
            <input type="text" name="name" placeholder="Name" required />
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Email" required />
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Password" required />
            <label for="password">Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button>Register</button>
            <p>Or Join with</p>
            <div className="icons">
              <a href="/">
                <FontAwesomeIcon className="facebook" icon={faFacebookF} />
              </a>
              <a href="/">
                <FontAwesomeIcon className="google" icon={faGoogle} />
              </a>
            </div>
          </form>
        </div>
      </Container>
      <MobileMenu />
      <Footer />
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loginForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    width: 30%;
    box-shadow: 0 0px 12px rgba(0, 0, 0, 0.055);
    border-radius: 10px;
    padding: 30px;
    margin: 50px 0;
    border: 1px solid #a19c9c49;
    ${mobile({
      width: "70%",
    })}
  }
  .loginForm h2 {
    text-align: center;
    margin: 20 0;
    padding: 10px;
  }
  .loginForm label {
    font-size: 18px;
  }
  .loginForm input {
    font-size: 14px;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 8px 8px;
    outline: none;
    &:active {
      outline: #10918a;
    }
  }
  .loginForm > a {
    font-size: 15px;
    color: black;
  }
  .loginForm p {
    text-align: center;
    margin: 10px 0;
  }
  .loginForm button {
    padding: 8px 0;
    background-color: #01936c;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .icons a {
    text-decoration: none;
    cursor: pointer;
    position: relative;
    top: 0;
    &:hover {
      top: -2px;
      transition: 0.3s;
    }
  }
  .icons .facebook {
    border-radius: 50%;
    background: #3b5998;
    color: white;
    padding: 10px 13px;
  }
  .icons .google {
    border-radius: 50%;
    background: #e62833;
    color: white;
    padding: 10px;
  }
`;

export default Register;
import React from "react";
import { AiOutlineRollback, AiOutlineShopping } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { MdOutlineLocationOn, MdOutlineManageAccounts } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AccountHeader from "../components/AccountHeader";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import { desktop } from "../responsive";

const Account = () => {
  return (
    <>
      <Navbar />
      <AccountContainer>
        <AccountHeader />
        <section className="midContainer">
          <ul>
            <li>
              <AiOutlineShopping className="accountIcon" />
              <Link to='/my-orders' className="link">My Orders</Link>
            </li>
            <li>
              <AiOutlineRollback className="accountIcon" />
              <Link className="link">My Returns</Link>
            </li>
            <li>
              <MdOutlineLocationOn className="accountIcon" />
              <Link className="link">Address</Link>
            </li>
            <li>
              <MdOutlineManageAccounts className="accountIcon" />
              <Link className="link">Account Information</Link>
            </li>
            <li>
              <HiOutlineNewspaper className="accountIcon" />
              <Link className="link">Policies</Link>
            </li>
            <li>
              <FiHelpCircle className="accountIcon" />
              <Link className="link">Help</Link>
            </li>
            <li>
              <RiLogoutBoxLine className="accountIcon" />
              <Link className="link">Log out</Link>
            </li>
          </ul>
        </section>
      </AccountContainer>
      <MobileMenu />
    </>
  );
};

const AccountContainer = styled.div`
  .midContainer > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 100px;
    ${desktop({
      width : '60%',
      margin : '0 auto'
    })}
  }
  .midContainer > ul > li {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid lightgray;
  }
  .midContainer .accountIcon {
    font-size: 24px;
    color: #474444fa;
  }
  .link {
    text-decoration: none;
    color: #474444fa;
    width: 100%;
    padding: 5px 0;
  }
`;
export default Account;

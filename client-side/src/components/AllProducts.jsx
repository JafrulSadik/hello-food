import React from "react";
import styled from "styled-components";
import { AllProductItems } from "../data";
import { mobile } from "../responsive";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  return (
    <Container>
      <div className="header">
        <div className="name">
          <span className="text">All Products</span>
        </div>
        <div className="seeAll">
          <span>See More</span>
        </div>
      </div>
      <div className="wrapper">
        {AllProductItems.map((item, index) => (
            <ProductCard item={item} key={index}/>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
    margin: 50px 50px;
    ${mobile({
      margin: "0px 20px"
    })}

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 10px;

    ${mobile({
      marginTop : "0px",
      margin: "20px 20px"
    })}
  }

  .text{
    font-size: 30px;
    font-weight: 700;
    color: #253d4e;

    ${mobile({
      fontSize: "20px"
    })}
  }

  .seeAll {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    color: #253d4e;

    ${mobile({
      fontSize: "14px"
    })}
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 15px;
  }
`;

export default AllProducts;
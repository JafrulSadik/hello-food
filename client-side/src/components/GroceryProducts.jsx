import React from "react";
import styled from "styled-components";
import { GroceryItems } from "../data";
import { mobile } from "../responsive";
import ProductCard from "./ProductCard";

const GroceryProducts = () => {
  return (
    <Container>
      <div className="header">
        <div className="name">
          <span className="text">Grocery</span>
        </div>
        <div className="seeAll">
          <span>View All</span>
        </div>
      </div>
      <div className="wrapper">
        {GroceryItems.map((item, index) => (
            <ProductCard item={item} key={index}/>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
    margin: 50px 50px;
    ${mobile({
      margin: "0px 5px"
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
    color: #01936c;

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
    border: 1px solid #01936c;
    padding: 5px 10px;
    border-radius: 5px;

    ${mobile({
      fontSize: "14px"
    })}
  }
  .seeAll > span {
    color: #01936c;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-grow: 1;
    gap: 5px;

    ${mobile({
      justifyContent : "space-evenly",
      gap: "15px 0px"
    })}
  }
`;
export default GroceryProducts;
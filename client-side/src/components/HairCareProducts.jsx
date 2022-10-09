import React from "react";
import styled from "styled-components";
import { HairCareItems } from "../data";
import ProductCard from "./ProductCard";

const HairCareProducts = () => {
  return (
    <Container>
      <div className="header">
        <div className="name">
          <span className="text">Hair Care and Treatment</span>
        </div>
        <div className="seeAll">
          <span>See More</span>
        </div>
      </div>
      <div className="wrapper">
        {HairCareItems.map((item) => (
            <ProductCard item={item} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
    margin: 50px 10px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 10px;
  }

  .text{
    font-size: 30px;
    font-weight: 700;
    color: #253d4e;
  }

  .seeAll {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    color: #253d4e;
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

export default HairCareProducts;
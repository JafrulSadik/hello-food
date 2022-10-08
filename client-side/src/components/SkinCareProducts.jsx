import React from "react";
import styled from "styled-components";
import { SkinCareItems } from "../data";
import ProductCard from "./ProductCard";

const SkinCareProducts = () => {
  return (
    <Container>
      <div className="header">
        <div className="name">
          <h1>Skin Care - Face Mask &‌ Packs</h1>
        </div>
        <div className="seeAll">
          <span>See All</span>
        </div>
      </div>
      <div className="wrapper">
        {SkinCareItems.map((item) => (
            <ProductCard item={item} key={item.id} />
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
    margin: 50px 10px;
  }
  .seeAll {
    display: flex;
    align-items: center;
    justify-content: center;
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

export default SkinCareProducts;
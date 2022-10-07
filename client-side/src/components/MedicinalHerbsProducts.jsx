import React from "react";
import styled from "styled-components";
import { MedicinalHerbsItems } from "../data";
import ProductCard from "./ProductCard";

const MedicinalHerbsProducts = () => {
  return (
    <Container>
      <div className="header">
        <div className="name">
          <h1>Medicinal Herbs</h1>
        </div>
        <div className="seeAll">
          <span>See All</span>
        </div>
      </div>
      <div className="wrapper">
        {MedicinalHerbsItems.map((item) => (
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

export default MedicinalHerbsProducts;
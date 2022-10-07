import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import { AllProductItems } from "../data";

const AllProducts = () => {
  return (
    <Container>
      <div className="header">
        <div className="name">
          <h1>All Products</h1>
        </div>
        <div className="seeAll">
          <span>See All</span>
        </div>
      </div>
      <div className="wrapper">
        {AllProductItems.map((item) => (
          <div className="card" key={item.id}>
            <div className="new">
              <p>New</p>
            </div>
            <div className="imageDiv">
              <img
                src={item.img}
                alt=""
              />
            </div>
            <div className="textDiv">
              <h5>{item.title}</h5>
            </div>
            <div className="priceAndButton">
              <div className="price">
                <h5>{item.price}</h5>
              </div>
              <div className="buttonDiv">
                <AiOutlineShoppingCart />
                <button>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 50vh 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
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
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    height: 320px;
    width: 220px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    z-index: -1;
    &:hover {
      border: 1px solid lightblue;
      box-shadow: 10px 10px 8px #eff1f1ef;
    }
  }
  .new {
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: #3bb77e;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 14px;
    color: white;
  }
  .imageDiv {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .imageDiv img {
    height: 160px;
    width: 160px;
  }
  .textDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }
  .priceAndButton {
    display: flex;
    width: 100%;
    margin: 20px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .price h5 {
    color: #10918a;
  }
  .buttonDiv {
    padding: 10px;
    background-color: #def9ec;
    width: 70px;
    height: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    color: #10918a;
    cursor: pointer;
  }
  .buttonDiv button {
    border: none;
    background-color: #def9ec;
    color: #10918a;
  }
`;

export default AllProducts;

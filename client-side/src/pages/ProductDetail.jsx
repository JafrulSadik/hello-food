import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if(type === 'minus') {
      setQuantity(quantity > 1 ? quantity - 1 : 1)
     } else {
      setQuantity(quantity + 1)
     }
}
  
  return (
    <>
      <Navbar />
      <Container>
        <div className="wrapper">
          <section className="topSection">
            <div className="imageDiv">
              <img
                src="https://i.ibb.co/K6dxfyc/Himalay-pink-salt-gura.jpg"
                alt=""
              />
            </div>
            <div className="infoDiv">
              <h3>Himalayan Natural Pink Salt Rock Salt 1 kg</h3>
              <p>Availabilty : In Stock</p>
              <h4>320 Tk</h4>
              <p>Quantity:</p>
                <div className="priceChoosen">
                  <button
                    type="button" style={{backgroundColor : (quantity > 1) ? '#EB5525' : '#ef8f6fc8', cursor : (quantity > 1) ? 'pointer' : 'not-allowed' }}
                    onClick={() => handleQuantity('minus')}
                  >
                    <AiOutlineMinus />
                  </button>
                  <input type="text" placeholder={quantity} />
                  <button
                    name="plus"
                    type="button"
                    onClick={() => handleQuantity('plus')}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              <div className="addAndBuy">
                <button className="addToCart" type="button">
                  Add to cart
                </button>
                <button className="buyNow" type="button">
                  Buy Now
                </button>
              </div>
            </div>
          </section>
          <section className="midSection"></section>
          <section className="bottomSection"></section>
        </div>
      </Container>
      <MobileMenu />
    </>
  );
};

const Container = styled.div`
  .wrapper .topSection {
    display: flex;
    justify-content: space-around;
    height: 500px;
    margin: 50px 100px;
  }
  .topSection .imageDiv {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .imageDiv img {
    width: 400px;
    height: 400px;
  }
  .topSection .infoDiv {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px;
  }
  .priceChoosen {
    width: 110px;
    border: 1px solid #EE6443;
    display: flex;
  }
  .priceChoosen button {
    flex: 1;
    padding: 8px;
    border: none;
    background-color: #EE6443;
    color: white;
    cursor: pointer;
  }
  .priceChoosen input {
    text-align: center;
    padding: 8px;
    width: 20px;
    border: none;
    outline: none;
  }
  .addAndBuy {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;
  }
  .addAndBuy button {
    padding: 10px;
    width: 40%;
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
  }
  .addAndBuy .addToCart {
    background-color: #ee6443;
    &:hover {
      background-color: #c54525;
      transition: 0.3s;
    }
  }
  .addAndBuy .buyNow {
    background-color: #3bb54a;
    &:hover {
      background-color: #02903d;
      transition: 0.3s;
    }
  }
`;
export default ProductDetail;

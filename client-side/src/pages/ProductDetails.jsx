import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { AllProductItems } from "../data";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "minus") {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

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
                  type="button"
                  style={{
                    backgroundColor: quantity > 1 ? "#3bb54a" : "#7cce86",
                    cursor: quantity > 1 ? "pointer" : "not-allowed",
                  }}
                  onClick={() => handleQuantity("minus")}
                >
                  <AiOutlineMinus />
                </button>
                <input type="text" placeholder={quantity} />
                <button
                  name="plus"
                  type="button"
                  onClick={() => handleQuantity("plus")}
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
          <section className="midSection">
            <h5><span>Description</span></h5>
            <div className="descDiv">
              <h3>Himalayan Natural Pink Salt Rock Salt 1 kg</h3>
              <ul>
                <li>Origin: Pakistan</li>
                <li>Weight: 1 kg</li>
                <li>জার প্যাক</li>
                <li>Quality Pure</li>
                <li>All thing buy at wholesale price</li>
                <li>99% clients satisfaction</li>
              </ul>
              <p>
                রোগ প্রতিরোধ ক্ষমতা থাকেসৈন্ধব লবণের প্রাকৃতিক উপায়েতৈরি হয় এই
                লবণ ফলে ঠান্ডা লাগা, জ্বর, ফ্লু, অ্যালার্জির মতো বেশ কিছু রোগের
                হাত থেকে শরীরকে বাঁচায়।দ্বিতীয়ত দেহের ওজন কমায়৷ দেহে
                ডাইজেস্টিভ জুস উৎপন্ন করে যা খুব তাড়াতাড়ি খাবার হজম করতে
              </p>
            </div>
          </section>
          <section className="bottomSection">
          <div className="productsList">
            {AllProductItems.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })}
          </div>
          </section>
        </div>
      </Container>
      <MobileMenu />
      <Footer />
    </>
  );
};

const Container = styled.div`
  .wrapper {
    margin: 50px 100px;
  }
  .topSection {
    display: flex;
    justify-content: space-around;
    height: 500px;
    background-color: #fff;
    
  }
  .topSection .imageDiv {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .imageDiv > img {
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
    border: 1px solid #3bb54a;
    display: flex;
  }
  .priceChoosen button {
    flex: 1;
    padding: 8px;
    border: none;
    background-color: #3bb54a;
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
  .midSection {
    background-color: #fff;
    margin: 40px 0;
    padding: 20px;
  }
  .midSection h5 {
    font-size: 18px;
    margin: 10px;
  }
  .midSection span {
    border-bottom: 2px solid green;
  }
  .midSection .descDiv {
    margin: 20px 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .descDiv ul {
    padding: 20px 40px;
  }
  .bottomSection {

  }

`;
export default ProductDetails;
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components';

const ProductCard = (props) => {
    const {item} = props
    return (
        <CardWrapper  key={item.id}>
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
                <h5>{item.price} Tk</h5>
              </div>
              <div className="buttonDiv">
                <AiOutlineShoppingCart />
                <button>Add</button>
              </div>
            </div>
          </CardWrapper>
    );
};

const CardWrapper = styled.div`
     position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    height: 340px;
    width: 220px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 13px;
    z-index: -1;
    &:hover {
      border: 1px solid lightblue;
      box-shadow: 10px 10px 8px #eff1f1ef;
    }
    .new {
    position: absolute;
    left: 10px;
    top: 5px;
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
    padding: 30px 0;
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
`

export default ProductCard;
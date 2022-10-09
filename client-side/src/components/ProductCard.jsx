import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
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
              <span className='title'>{item.title}</span>
            </div>
            <div className="priceAndButton">
                <span>{item.price} Tk</span>
                <button><FaShoppingCart/> Add</button>
            </div>
          </CardWrapper>
    );
};

const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #3bb77d31;
    height: 340px;
    width: 220px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 13px;
    //margin: 1px;
    &:hover{
      //border: 2px solid #14a7761f;
      box-shadow: 0 0 15px #33333316;
      border: 1px solid #3bb77d57;
      transition: 0.3s;
    }


    .new {
    position: absolute;
    left: 10px;
    top: 8px;
    background-color: #3BB77E;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 14px;
    color: white;
    font-size: 12px;
  }

  .title{
    font-size: 14px;
    font-weight: bold;
    color: #253d4e;
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

    &:hover{
      height: 162px;
      width: 162px;
      transition: 1s;
    }
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

  .priceAndButton span{
    font-size: 14px;
    font-weight: bold;
    color: #3BB77E;
  }
  
  .priceAndButton button{
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 14px;
    color: #3BB77E;
    background-color: #a1f6ce6c;
    border-radius: 5px;
    transition: 0.5s;
    &:hover{
      background-color: #3BB77E;
      color: white;
    }
  }
`

export default ProductCard;
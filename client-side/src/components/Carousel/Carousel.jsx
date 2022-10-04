import React, { useState } from "react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import styled from "styled-components";
import { sliderItems } from "../../data";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff7f7;
  cursor: pointer;
  margin: auto;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgb(66, 133, 244);
  }
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "35px"};
  right: ${(props) => props.direction === "right" && "35px"};
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: rgb(197, 234, 217);
`;
const InfoContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 30px;
  font-size: 40px;
`;
const Button = styled.button`
  padding: 15px 32px;
  font-size: 15px;
  cursor: pointer;
  background-color: green;
  border: none;
  color: white;
  text-align: center;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 70%;
`;

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <BsCaretLeft />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide key={item.id}>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Button>Shop now</Button>
              </InfoContainer>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <BsCaretRight />
        </Arrow>
      </Container>
    </>
  );
};

export default Carousel;

import React from "react";
import styled from "styled-components";
import grocery from "../images/categories/gorcery-removebg-preview.png";
import hairCare from "../images/categories/Hair_Care_2-removebg-preview.png";
import medicialHerbs from "../images/categories/healing-herbs-removebg-preview.png";
import skinCare from "../images/categories/Mosur_dal_gura_100gm-removebg-preview.png";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 50px 0;
  color: #1c7658;

  ${mobile({
    "marginTop" : "20px",
    "marginBottom" : "0px"
  })}
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;

  ${mobile({
    "justifyContent" : "center",
    "gap" : "20px 20px"
  })}
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  width: 200px;
  flex-basis: 150px;
  background-color: #${(props) => props.bg};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid #fff;

  &:hover{
    border: 2px solid #14a7761f;
    color:  #01936c;
  }

  
`;
const ImageDiv = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 80px;
  width: 100px;
`;
const TextDiv = styled.div``;
const Text = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        <Card bg="ECFFEC">
          <ImageDiv>
            <Image src={grocery} />
          </ImageDiv>
          <TextDiv>
            <Text>Grocery</Text>
          </TextDiv>
        </Card>
        <Card bg="feefead2">
          <ImageDiv>
            <Image src={hairCare} />
          </ImageDiv>
          <TextDiv>
            <Text>Hair Care</Text>
          </TextDiv>
        </Card>
        <Card bg="F2FCE4">
          <ImageDiv>
            <Image src={medicialHerbs} />
          </ImageDiv>
          <TextDiv>
            <Text>Medicinal Herbs</Text>
          </TextDiv>
        </Card>
        <Card bg="FFF3FF">
          <ImageDiv>
            <Image src={skinCare} />
          </ImageDiv>
          <TextDiv>
            <Text>Skin Care</Text>
          </TextDiv>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Categories;
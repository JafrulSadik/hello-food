import React, { useState } from 'react';
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import styled from 'styled-components';
import { tablet } from "../responsive";


const Wrapper = styled.div`
    display: none;
    position: relative;
    width: 100vw;
    height: 60px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0 -1px 10px rgba(59, 59, 59, 0.111);


    ${tablet({
      display: "block"
    })}
  `

  const Menu = styled.ul`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  `

  const List = styled.li`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    list-style: none;
    color: gray;
  `

  const Icon = styled.a`
    text-decoration: none;
    color: gray;
    font-size: 1rem;
  `

  const Text = styled.a`
    color: gray;
    text-decoration: none;
    font-size: 12px;
    color: gray;
  `

  const IconShop = styled.a`
    text-decoration: none;
    color: gray;
    font-size: 1.2rem;
    transform:translateY(-18px);
    color: #fff;

    &:before{
      content: '';
      position: absolute;
      top: -20px;
      left: -16px;
      width: 50px;
      height: 50px;
      background-color: #3bb77d;
      border-radius: 50%;
      border: 5px solid white;
      box-shadow: 0 -1px 10px rgba(59, 59, 59, 0.111);
      z-index: -1;
    }
  `

  const SearchScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 70px;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100px)
  `

  const SearchBar = styled.div`
    width: 75%;
    height: 40px;
    display: flex;
    align-items: center;
  `

  const Exit = styled.div`
    font-size: 1.5rem;
    width: 60px;
    text-align: center;
    color: #3bb77d;
  `

  const InputDiv = styled.input`
    width: 100%;
    border: none;
    padding-left: 5px;
    outline: none;
    color: gray;
    font-size: 14px;
    height: 100%;
    border: 1px solid #3bb77d;
    border-radius: 10px;
    padding: 0px 15px;
    font-size: 12px;
  `

const MobileMenu = () => {

  const [search, setSearch] = useState()
  
  const handleSearch = (props) => {

    if(props){
      setSearch({
        "transform": "translateY(0px)",
        "position" : "fixed",
        "transition" : "0.5s"
      })
    } else {
      setSearch({
          "transform": "translateY(-100px)",
          "transition" : "0.5s"
        })
    }
  }
  

  return (

    <>
      <Wrapper>
        <Menu>
          <List>
            <Icon href='/home'>
              <BiHome/>
            </Icon>
            <Text href='/home'>
              Home
            </Text>
          </List>

          <List>
            <Icon onClick={() => handleSearch("searchBtn")}>
              <HiOutlineSearch/>
            </Icon>
            <Text onClick={() => handleSearch("searchBtn")}>
              Search
            </Text>
          </List>

          <List>
            <IconShop href='/Shop'>
              <AiOutlineShopping/>
            </IconShop>
            <Text href='/Shop'>
              Shop
            </Text>
          </List>

          <List>
            <Icon href='/Cart'>
              <AiOutlineShoppingCart/>
            </Icon>
            <Text href='/Cart'>
              Cart
            </Text>
          </List>

          <List>
            <Icon href='/Profile'>
              <VscAccount/>
            </Icon>
            <Text href='/Profile'>
              Profile
            </Text>
          </List>


        </Menu>
      </Wrapper>

      <SearchScreen style={search}>
        <SearchBar>
          <Exit onClick={() => handleSearch()}><BiLeftArrowAlt/></Exit>
          <InputDiv placeholder='Input here...'/>
        </SearchBar>
      </SearchScreen>
    </>
  )
}

export default MobileMenu
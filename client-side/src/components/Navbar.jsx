import React from 'react';
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { BiHome, BiSearch } from "react-icons/bi";
import { CgLogIn, CgLogOut, CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import styled from "styled-components";
import logo from "../images/hello_food.png";
import { tablet } from "../responsive";



const Navbar = () => {

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    align-items: center;
    padding:0px 10%;
    height: 100px;
    box-shadow: 0 -1px 10px rgba(59, 59, 59, 0.111);
    text-align: center;

    ${tablet({
        "height" : "70px",
        "justify-content" : "space-around",
    })}
  `

  const Logo = styled.a`
    flex: 1;
    text-align: start;

    ${tablet({
        'height' : "70px",
        "display" : "flex",
        "align-items" : "center"
    })}
  `

  const LogoImage = styled.img`
    height: 60px;
    width: 100px;

    ${tablet({
        "height" : "40px",
        "width" : "60px"
    })}
  `
  const Form = styled.form`
    background-color: white;
    width: 100%;
    height: 100%;
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;

    ${tablet({
        display: "none",
    })}
  `

  const InputDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 46px;
    border:1px solid #3BB77E;
    border-right: none;
    background-color: white;
    border-radius: 10px;
  `
  const Icon = styled.p`
    color: #7E7F82;
    font-size: 1.2em;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 10px;
  `

  const SearchInput = styled.input`
    width: 100%;
    border: none;
    padding-left: 5px;
    outline: none;
    color: gray;
    font-size: 14px;
    height: 100%;
  `
  const NavButton = styled.button`
    width: 140px;
    height: 47px;
    background-color: #3BB77E;
    color: white;
    border: none;
    border-radius: 0px 8px 8px 0px;
    font-size: 15px;
    &:hover{
        background-color: #1f935d;
        color: white;
        transition: 0.5s;
        cursor: pointer;
    }
  `
  
  const NavLink = styled.div`
    width: 100%;
    height: 100%;
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    ${tablet({
        "flex": "1",
        "gap" : "10px",
        "justify-content" : "flex-end",
    })}

  `

  const Link = styled.a`
    display: flex;
    gap: 8px;
    align-items: center;
    
    padding: 10px 15px;
    font-size: 14px;
    background-color: #f6f6f6;
    border-radius: 5px;
    color: #7E7F82;
    &:hover{
        background-color: #3BB77E;
        color: white;
        transition: 0.5s;
        cursor: pointer;
    }

    /* ${tablet({
        "padding" : "7px 10px",
        "gap" : "4px",
    })} */
    
    ${tablet({
      display: "none"
    })}
    
  `
  const Link1 = styled.a`
  display: none;
  gap: 8px;
  align-items: center;
  
  padding: 10px 15px;
  font-size: 14px;
  background-color: #f6f6f6;
  border-radius: 5px;
  color: #7E7F82;
  &:hover{
      background-color: #3BB77E;
      color: white;
      transition: 0.5s;
      cursor: pointer;
  }

  ${tablet({
        "display" : "flex",
        "padding" : "7px 10px",
        "gap" : "4px",
    })}
`
  
  const Text = styled.p`
    ${tablet({
        "font-size" : "12px"
    })}
  `
  const Span = styled.span`
    font-size: 1.2em;
    margin-top: 5px;

    ${tablet({
        "font-size" : "0.8rem",
        "margin-top" : "3px"
    })}
  `

const MenuWrapper = styled.div`
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

const MenuList = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  list-style: none;
  color: gray;
`

const MenuIcon = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 1rem;
`

const MenuText = styled.a`
  color: gray;
  text-decoration: none;
  font-size: 12px;
  color: gray;
`

const MenuIconShop = styled.a`
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

  const login = 1;

  return (

    <>
      <Wrapper>
          <Logo href='/#'>
              <LogoImage src={logo}/>
          </Logo>

          <Form>
              <InputDiv>
                  <Icon><BiSearch></BiSearch></Icon>
                  <SearchInput></SearchInput>
                  <NavButton>Search</NavButton>
              </InputDiv>
          </Form>

          <NavLink>
              <Link>
                  <Span><FaShoppingCart></FaShoppingCart></Span>
                  <Text>Cart</Text>
              </Link>
              <Link>
                  <Span><CgProfile/></Span>
                  <Text>My Account</Text>
              </Link>
              <Link1>
                  <Span>
                    {login ? <CgLogIn/> : <CgLogOut/>}
                  </Span>
                  <Text>{login ? "Login" : "Logout"}</Text>
              </Link1>
          </NavLink>
      </Wrapper>

      <MenuWrapper>
          <Menu>
            <MenuList>
              <MenuIcon href='/home'>
                <BiHome/>
              </MenuIcon>
              <MenuText href='/home'>
                Home
              </MenuText>
            </MenuList>

            <MenuList>
              <MenuIcon href='/Search'>
                <HiOutlineSearch/>
              </MenuIcon>
              <MenuText href='/Search'>
                Search
              </MenuText>
            </MenuList>

            <MenuList>
              <MenuIconShop href='/Shop'>
                <AiOutlineShopping/>
              </MenuIconShop>
              <MenuText href='/Shop'>
                Shop
              </MenuText>
            </MenuList>

            <MenuList>
              <MenuIcon href='/Cart'>
                <AiOutlineShoppingCart/>
              </MenuIcon>
              <MenuText href='/Cart'>
                Cart
              </MenuText>
            </MenuList>

            <MenuList>
              <MenuIcon href='/Profile'>
                <VscAccount/>
              </MenuIcon>
              <MenuText href='/Profile'>
                Profile
              </MenuText>
            </MenuList>


          </Menu>
      </MenuWrapper>

    </>
  )
}

export default Navbar
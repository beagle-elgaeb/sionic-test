import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import iconSearch from "../images/icon-search.svg";
import iconPlacemark from "../images/icon-placemark.svg";
import iconBasket from "../images/icon-basket.svg";
import avatar from "../images/image-avatar.jpg";


function Header() {
  return (
    <Container>
      <Logo>React</Logo>
      <City>
        <Icon src={iconPlacemark} alt="Местоположение пользователя" />
        <Text id="user-city"></Text>
      </City>
      <SearchForm>
        <SearchInput type="text" placeholder="Поиск бренда, товара, категории..." />
        <SearchButton type="submit"></SearchButton>
      </SearchForm>
      <Cart><Quantity>10+</Quantity></Cart>
      <Profile></Profile>
    </Container>
  );
}

// Header.propTypes = {};

export default Header;

const Container = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 20px auto 19px auto;
`;

const Logo = styled.a`
  display: block;
  font-size: 37px;
  line-height: 43px;
  font-weight: 700;
  color: #2d2d2f;
  margin: 0;
`;

const City = styled.div`
  width: 16%;
  display: flex;
  margin: 0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto 5px auto 0;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 140%;
  font-weight: 400;
  color: #727280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto 0;
`;

const SearchForm = styled.form`
  width: 45%;
  height: 50px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #f0f4fb;
  border-radius: 99em;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #727280;
  padding: 0 0 0 20px;
`;

const SearchButton = styled.button`
  width: 94px;
  height: 42px;
  position: absolute;
  top: 4px;
  right: 4px;
  background: #f0f4fb;
  background-image: url(${iconSearch});
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  border-radius: 99em;
  margin: 0;
  padding: 0;
`;

const Cart = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  background-image: url(${iconBasket});
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border: 1px solid #727280;
  border-radius: 99em;
`;

const Quantity = styled.span`
  position: absolute;
  left: 27px;
  top: -4px;
  background: #ffffff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: #2967FF;
  margin: 4px;
`;

const Profile = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${avatar});
  border-radius: 99em;
`;

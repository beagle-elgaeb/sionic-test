import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

function Header() {
  return (
    <Container>
      <Logo>React</Logo>
    </Container>
  );
}

// Header.propTypes = {};

export default Header;

const Container = styled.header`
  width: 100%;
`;

const Logo = styled.a`
  display: block;
  font-size: 37px;
  line-height: 43px;
  font-weight: 700;
  color: #2d2d2f;
  margin: 20px 25px 19px 50px;
`;

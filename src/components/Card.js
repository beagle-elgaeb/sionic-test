import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Card({ card }) {
  return (
    <Item>

<Button></Button>
    </Item>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
};

export default Card;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #FFFFFF;
  border-radius: 11px;
  list-style-type: none;
  margin: 0;
`;

const Button = styled.button`
  width: 214px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 99em;
  outline: none;
  font-size: 14px;
  line-height: 140%;
  font-weight: 400;
  color: #2967FF;
  margin: 0;
  padding: 0;
`
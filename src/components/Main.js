import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Card from "./Card";

function Main({ cards }) {
  console.log(cards);

  return (
    <ProfileContainer>
      <CardsList>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardsList>
    </ProfileContainer>
  );
}

Main.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default Main;

const ProfileContainer = styled.div`
  height: fit-content;
`;

const CardsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 214px);
  grid-template-rows: repeat(auto-fill, 283px);
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

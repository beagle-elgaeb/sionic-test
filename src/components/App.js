import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import api from "../utils/Api";

import Header from "./Header";
import Main from "./Main";
import SidePanel from "./SidePanel";
import Footer from "./Footer";

import "../index.css";

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProducts()
      .then((cards) => {
        if (cards) {
          setCards(cards);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Page>
      <HeaderContentAndSidePanel>
        <HeaderAndContent>
          <Header />
          <Content>
            <Main cards={cards} />
          </Content>
        </HeaderAndContent>
        <SidePanel />
      </HeaderContentAndSidePanel>
      <Footer />
    </Page>
  );
}

// App.propTypes = {};

export default App;

const Page = styled.div`
  width: 1366px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid red;
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: 0 auto;
`;

const Content = styled.main`
  width: 100%;
  border: 1px solid yellow;
`;

const HeaderContentAndSidePanel = styled.div`
  width: 100%;
  display: flex;
`;

const HeaderAndContent = styled.div`
  width: 1015px;
  display: flex;
  flex-direction: column;
`;

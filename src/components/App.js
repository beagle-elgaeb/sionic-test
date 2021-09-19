import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import Header from "./Header";
import Main from "./Main";
import SidePanel from "./SidePanel";
import Footer from "./Footer";

import "../index.css";

function App() {
  return (
    <Page>
      <HeaderContentAndSidePanel>
        <HeaderAndContent>
          <Header />
          <Content>
            <Main />
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
  max-width: 1366px;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: 0 auto;
`;

const HeaderContentAndSidePanel = styled.div`
  width: 100%;
  display: flex;
`;

const HeaderAndContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  width: 100%;
`;

import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import imageFree from "../images/image-free.svg";
import newCollection from "../images/image-new-collection-sweet.jpg";

function SidePanel() {
  return (
    <SidePanelContainer>
      <SaleBanner>
        <ImageFree src={imageFree} alt="Товары бесплатно" />
        <SaleTitle>Получай товары БЕСПЛАТНО!</SaleTitle>
        <SaleButton>Узнать подробнее</SaleButton>
      </SaleBanner>
      <NewCollectonBanner>Новая коллекция</NewCollectonBanner>
    </SidePanelContainer>
  );
}

// SidePanel.propTypes = {};

export default SidePanel;

const SidePanelContainer = styled.div`
  border-left: 1px solid #f0f4fb;
  padding: 0 24px 0 16px;
`;

const SaleBanner = styled.div`
  width: 311px;
  height: 143px;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ff2d87;
  border-radius: 20px;
  margin: 28px 0 33px 0;
  padding: 0 0 0 97px;
`;

const ImageFree = styled.img`
  width: 91px;
  height: 82px;
  position: absolute;
  top: 32px;
  left: -11px;
`;

const SaleTitle = styled.h2`
  font-size: 20px;
  line-height: 130%;
  font-weight: 600;
  color: #2967ff;
  margin: 21px 0 10px;
`;

const SaleButton = styled.button`
  width: 194px;
  height: 40px;
  background: #2967ff;
  border: none;
  border-radius: 99em;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

const NewCollectonBanner = styled.button`
  width: 311px;
  height: 168px;
  background: url(${newCollection});
  background-size: cover;
  background-position: center top;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 20px 0;
`;

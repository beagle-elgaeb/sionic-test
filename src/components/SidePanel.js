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
        <SaleButton>
          <SaleButtonText>Узнать подробнее</SaleButtonText>
        </SaleButton>
      </SaleBanner>
      <NewCollectonBanner>
        <NewCollectonBannerText>Новая коллекция</NewCollectonBannerText>
      </NewCollectonBanner>
    </SidePanelContainer>
  );
}

// SidePanel.propTypes = {};

export default SidePanel;

const SidePanelContainer = styled.div`
  border-left: 1px solid #f0f4fb;
  padding: 0 24px 0 16px;

  @media (max-width: 650px) {
    display: none;
  }
`;

const SaleBanner = styled.div`
  width: 311px;
  height: 143px;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ff2d87;
  border-radius: 20px;
  margin: 28px 0 33px 0;

  @media (max-width: 1060px) {
    width: 207px;
    height: 112px;
  }

  @media (max-width: 820px) {
    width: 112px;
    height: 207px;
    display: flex;
  }
`;

const ImageFree = styled.img`
  width: 91px;
  height: 82px;
  position: absolute;
  top: 32px;
  left: -11px;

  @media (max-width: 1060px) {
    width: 60px;
    height: 55px;
    top: 65px;
  }

  @media (max-width: 820px) {
    width: 40px;
    height: 37px;
    top: 180px;
    left: -11px;
  }
`;

const SaleTitle = styled.h2`
  font-size: 18px;
  line-height: 130%;
  font-weight: 600;
  color: #2967ff;
  margin: 21px 0 10px 97px;

  @media (max-width: 1060px) {
    margin: 14px 0 10px 20px;
  }

  @media (max-width: 820px) {
    writing-mode: tb-rl;
    transform: rotate(180deg);
    margin: 0 10px 35px 10px;
  }
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
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 0 97px;
  padding: 0;

  @media (max-width: 1060px) {
    width: 144px;
    height: 34px;
    font-size: 14px;
    margin: 0 0 0 55px;
  }

  @media (max-width: 820px) {
    width: 34px;
    height: 144px;
    margin: 25px 0 0 0;
  }
`;

const SaleButtonText = styled.p`
  @media (max-width: 820px) {
    writing-mode: tb-rl;
    transform: rotate(180deg);
    margin: 0 auto;
  }
`;

const NewCollectonBanner = styled.button`
  width: 311px;
  height: 168px;
  background: url(${newCollection});
  background-size: cover;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 20px 0;

  @media (max-width: 1060px) {
    width: 207px;
    height: 112px;
  }

  @media (max-width: 820px) {
    width: 112px;
    height: 207px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

const NewCollectonBannerText = styled.p`
  @media (max-width: 820px) {
    writing-mode: tb-rl;
    transform: rotate(180deg);
    margin: 0 auto;
  }
`;

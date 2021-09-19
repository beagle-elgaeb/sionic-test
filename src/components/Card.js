import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as api from "../utils/Api";

function Card({ product }) {
  const [productImage, setProductImage] = React.useState([]);
  const [productVariations, setProductVariations] = React.useState([]);

  React.useEffect(() => {
    api
      .getProductImages(product.id)
      .then((images) => {
        setProductImage(images);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getProductVariations(product.id)
      .then((variations) => {
        setProductVariations(variations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product]);

  return (
    <Item>
      <VariationsList>
        {productVariations.map((variation) => (
          <Variation
            type="button"
            key={variation.id}
            colorIndex={Math.floor(Math.random() * colors.length)}
          >
            {variation.stock}
          </Variation>
        ))}
      </VariationsList>
      <ProductImage
        url={
          productImage.length &&
          `https://test2.sionic.ru/${
            productImage[Math.floor(Math.random() * productImage.length)].image_url
          }`
        }
      ></ProductImage>
      <ProductName>{product.name}</ProductName>
      <Price>от 350 000 ₽</Price>
      <PriceWithSale>
        <PriceDisabled>450 000 ₽</PriceDisabled>
        <Sale>-10%</Sale>
      </PriceWithSale>
      <Button type="submit">Добавить в корзину</Button>
    </Item>
  );
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;

const Item = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  list-style-type: none;
  margin: 0;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 138px;
  background: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`;

const VariationsList = styled.div`
  position: absolute;
  top: 100px;
  left: 11px;
`;

const colors = ["#2967FF", "#58CF18", "#FFA601", "#FF7CB4"];

const Variation = styled.button`
  width: fit-content;
  height: 24px;
  background: ${({ colorIndex }) => colors[colorIndex]};
  border: none;
  border-radius: 99em;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 6px 20px 0;
  padding: 2px 9px;
`;

const ProductName = styled.h2`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2d2d2f;
  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #2967ff;
  margin: 0 0 1px 0;
`;

const PriceWithSale = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #8d8d8e;
  margin: 0 0 11px 0;
`;

const PriceDisabled = styled.p`
  display: inline;
  color: #8d8d8e;
  text-decoration: line-through;
  margin: 0 15px 0 0;
`;

const Sale = styled.span`
  display: inline;
  font-weight: 600;
  color: #ff2d87;
  text-decoration: none;
  margin: 0;
`;

const Button = styled.button`
  width: 214px;
  height: 40px;
  background: transparent;
  border: 1px solid #2967ff;
  border-radius: 99em;
  outline: none;
  font-size: 14px;
  line-height: 140%;
  font-weight: 400;
  color: #2967ff;
  margin: 0;
  padding: 0;
`;

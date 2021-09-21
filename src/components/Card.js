import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as api from "../utils/Api";

function Card({ product }) {
  const [productImage, setProductImage] = React.useState([]);
  const [productVariations, setProductVariations] = React.useState([]);
  const [listValues, setListValues] = React.useState([]);

  React.useEffect(() => {
    async function run() {
      try {
        const images = await api.getProductImages(product.id);
        setProductImage(images);
        const variations = await api.getProductVariations(product.id);
        setProductVariations(variations);

        variations.map(async (variation) => {
          const values = await api.getProductVariationsPropertyValues(variation.id);

          values.map(async (value) => {
            const values = await api.getProductVariationPropertyListValues(
              value.product_variation_property_id
            );
            setListValues(values);
          });
        });
      } catch (err) {
        console.log(err);
      }
    }

    run();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  function chooseMinPrice() {
    const prices = productVariations.map((variation) => variation.price);
    const price = Math.min(...prices);
    return price;
  }

  return (
    <Item>
      <VariationsList>
        {listValues.map((value) => (
          <Variation
            type="button"
            key={value.id}
            colorIndex={Math.floor(Math.random() * colors.length)}
          >
            {value.title}
          </Variation>
        ))}
      </VariationsList>
      <ProductImage
        url={productImage.length && `https://test2.sionic.ru/${productImage[0].image_url}`}
      ></ProductImage>
      <ProductName>{product.name}</ProductName>
      <Price>от {chooseMinPrice()} ₽</Price>
      <PriceWithSale>
        <PriceDisabled>450 000 ₽</PriceDisabled>
        <Sale>-0%</Sale>
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
  top: 60px;
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

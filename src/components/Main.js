import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";

import * as api from "../utils/Api";

import Card from "./Card";

import imageFree from "../images/image-free.svg";
import newCollection from "../images/image-new-collection-sweet.jpg";

function Main() {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState();

  React.useEffect(() => {
    async function run() {
      try {
        const products = await api.getProducts(categoryId, 0);
        setProducts(products);
        const categories = await api.getCategories();
        setCategories(categories);
      } catch (err) {
        console.log(err);
      }
    }

    run();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function selectCategory(category) {
    try {
      const products = await api.getSelectCategoryProducts(category.id, 0);
      setProducts(products);
      setCategoryId(category.id);
    } catch (err) {
      console.log(err);
    }
  }

  async function loadProducts() {
    try {
      const newProducts = await api.getProducts(categoryId, products.length);
      setProducts([...products, ...newProducts]);
      console.log(products);
      console.log(newProducts);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Categories>
        <Title>Категории товаров</Title>
        <Settings type="button">Настройки</Settings>
        <CategoriesList>
          {categories.map((category) => (
            <Category
              type="button"
              key={category.id}
              onClick={() => selectCategory(category)}
              colorIndex={Math.floor(Math.random() * colors.length)}
            >
              {category.name}
            </Category>
          ))}
        </CategoriesList>
      </Categories>
      <Banners>
        <SaleBanner>
          <ImageFree src={imageFree} alt="Товары бесплатно" />
          <SaleTitle>Получай товары БЕСПЛАТНО!</SaleTitle>
          <SaleButton>Подробнее</SaleButton>
        </SaleBanner>
        <NewCollectonBanner>Новая коллекция</NewCollectonBanner>
      </Banners>
      <Cards>
        <CardsList>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </CardsList>
        <LoadProductsButton type="button" onClick={loadProducts}>
          Показать больше товаров
        </LoadProductsButton>
      </Cards>
    </>
  );
}

// Main.propTypes = {};

export default Main;

const Categories = styled.section`
  width: 90%;
  margin: 30px auto 0 auto;
`;

const Title = styled.h2`
  display: inline;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  color: #2d2d2f;
  margin: 0 0 0;
`;

const Settings = styled.button`
  display: inline;
  background: transparent;
  border: none;
  border-radius: 99em;
  outline: none;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  color: #2967ff;
  margin: 0 0 0 107px;

  @media (max-width: 820px) {
    margin: 0 0 0 80px;
  }

  @media (max-width: 650px) {
    margin: 0 0 0 40px;
  }

  @media (max-width: 400px) {
    margin: 0 0 0 20px;
  }
`;

const CategoriesList = styled.div`
  margin: 30px auto 0;
`;

const colors = ["#2967FF", "#58CF18", "#FFA601", "#FF7CB4"];

const Category = styled.button`
  width: fit-content;
  height: 24px;
  background: ${({ colorIndex }) => colors[colorIndex]};
  border: none;
  border-radius: 99em;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 6px 20px 0;
  padding: 2px 9px;

  @media (max-width: 1060px) {
    margin: 0 6px 15px 0;
  }

  @media (max-width: 820px) {
    font-size: 12px;
    line-height: 18px;
    margin: 0 6px 10px 0;
  }
`;

const Banners = styled.div`
  display: none;

  @media (max-width: 650px) {
    width: 90%;
    display: flex;
    margin: 20px auto 50px auto;
  }
`;

const SaleBanner = styled.div`
  width: calc(50% - 10px);
  height: 115px;
  box-sizing: border-box;
  position: relative;
  border: 1px solid #ff2d87;
  border-radius: 20px;
  margin: 0 20px 0 0;

  @media (max-width: 400px) {
    height: 100px;
  }
`;

const ImageFree = styled.img`
  width: 50px;
  height: 47px;
  position: absolute;
  top: 75px;
  left: -11px;

  @media (max-width: 400px) {
    display: none;
  }
`;

const SaleTitle = styled.h2`
  font-size: 16px;
  line-height: 130%;
  font-weight: 600;
  color: #2967ff;
  text-align: center;
  margin: 10px auto;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const SaleButton = styled.button`
  width: 105px;
  height: 30px;
  display: block;
  background: #2967ff;
  border: none;
  border-radius: 99em;
  outline: none;
  font-size: 14px;
  line-height: 19px;
  font-weight: 400;
  color: #ffffff;
  margin: 0 auto;
  padding: 0;
`;

const NewCollectonBanner = styled.button`
  width: calc(50% - 10px);
  height: 115px;
  background: url(${newCollection});
  background-size: cover;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0 0;

  @media (max-width: 400px) {
    height: 100px;
  }
`;

const Cards = styled.section`
  width: 90%;
  margin: 0 auto;
`;

const CardsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(212px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LoadProductsButton = styled.button`
  width: 292px;
  height: 50px;
  display: block;
  background: #f0f4fb;
  border: none;
  border-radius: 99em;
  outline: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  color: #727280;
  margin: 30px auto 55px auto;
`;

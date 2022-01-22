import { GET_CAROUSEL_BEGIN, GET_CATEGORY_BEGIN, GET_PRODUCT_BEGIN } from "./ActionTypes.js";

export const getCarousel = () => {
  return {
    type: GET_CAROUSEL_BEGIN,
  };
};

export const getCategory = () => {
  return {
    type: GET_CATEGORY_BEGIN,
  };
};

export const getProduct = () => {
  return {
    type: GET_PRODUCT_BEGIN,
  };
};

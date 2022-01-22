import { GET_PRODUCT_BEGIN, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../Action/ActionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const product = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case GET_PRODUCT_FAIL:
      return {
        data: [],
        loading: false,
        error: error,
      };
  }
};

export default product;

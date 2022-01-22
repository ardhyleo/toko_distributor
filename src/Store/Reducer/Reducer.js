import { GET_CAROUSEL_BEGIN, GET_CAROUSEL_FAIL, GET_CAROUSEL_SUCCESS } from "../Action/ActionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const carousel = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_CAROUSEL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CAROUSEL_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case GET_CAROUSEL_FAIL:
      return {
        data: [],
        loading: false,
        error: error,
      };
  }
};

export default carousel;

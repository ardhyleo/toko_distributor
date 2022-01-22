import { GET_CATEGORY_BEGIN, GET_CATEGORY_FAIL, GET_CATEGORY_SUCCESS } from "../Action/ActionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const category = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case GET_CATEGORY_FAIL:
      return {
        data: [],
        loading: false,
        error: error,
      };
  }
};

export default category;

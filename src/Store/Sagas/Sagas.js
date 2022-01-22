import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_CAROUSEL_BEGIN, GET_CAROUSEL_SUCCESS, GET_CAROUSEL_FAIL, GET_CATEGORY_BEGIN, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAIL, GET_PRODUCT_BEGIN, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../Action/ActionTypes";

const baseURl = "https://gardien.tokodistributor.co.id/api-web/v2/utility/home/banner-web";

const categoryUrl = "https://gardien.tokodistributor.co.id/api-web/v2/utility/home/box-category?with_staple=true";

const productUrl = "https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=1";

function* getCarousel(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(baseURl);
    console.log(res);
    yield put({
      type: GET_CAROUSEL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_CAROUSEL_FAIL,
      error: error,
    });
    console.log(err);
  }
}

function* getCategory(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(categoryUrl);
    console.log(res);
    yield put({
      type: GET_CATEGORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_CATEGORY_FAIL,
      error: error,
    });
    console.log(err);
  }
}

function* getProduct(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(productUrl);
    console.log(res);
    yield put({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_PRODUCT_FAIL,
      error: error,
    });
    console.log(err);
  }
}

export function* watchGetCarousel() {
  yield takeEvery(GET_CAROUSEL_BEGIN, getCarousel);
}
export function* watchGetCategory() {
  yield takeEvery(GET_CATEGORY_BEGIN, getCategory);
}

export function* watchGetProduct() {
  yield takeEvery(GET_PRODUCT_BEGIN, getProduct);
}

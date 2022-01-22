import { all } from "redux-saga/effects";
import { watchGetCarousel, watchGetCategory, watchGetProduct } from "./Sagas";

export default function* rootSaga() {
  yield all([watchGetCarousel()], watchGetCategory(), watchGetProduct());
}

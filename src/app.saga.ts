import { all } from 'redux-saga/effects';
import { usersSaga } from "./pages/home/home.saga";

export default function* rootSaga() {
  yield all([
    usersSaga()
  ])
}

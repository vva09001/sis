import { all } from 'redux-saga/effects';
import userSagas from 'store/user/saga';
import errorSagas from 'store/error/saga';

export default function* rootSaga() {
  yield all([userSagas(), errorSagas()]);
}

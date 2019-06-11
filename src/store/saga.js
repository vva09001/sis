import { all } from 'redux-saga/effects';
import dataSagas from 'store/data/saga';
import userSagas from 'store/user/saga';
import errorSagas from 'store/error/saga';

export default function* rootSaga() {
  yield all([dataSagas(), userSagas(), errorSagas()]);
}

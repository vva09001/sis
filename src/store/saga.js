import { all } from 'redux-saga/effects';
import userSagas from 'store/user/saga';
import maternitySagas from './maternity/saga';

export default function* rootSaga() {
  yield all([userSagas(), maternitySagas()]);
}

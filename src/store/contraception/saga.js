import actions from './actions';
import { all, fork, put, select, takeLatest } from 'redux-saga/effects';
import { id } from '../selectors';
import { contraception } from '../../services/contraception';

export function* contraceptionSaga() {
  yield takeLatest(actions.CONTRACEPTION_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield contraception(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.CONTRACEPTION_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến Sever');
    }
  });
}

export default function* rootSaga() {
  yield all([fork(contraceptionSaga)]);
}

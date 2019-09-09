import actions from './actions';
import { accident } from '../../services/occupationalDisease';
import { id } from '../selectors';
import { put, all, takeLatest, select, fork } from 'redux-saga/effects';

export function* accidentSaga() {
  yield takeLatest(actions.ACCIDENT_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield accident(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.ACCIDENT_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export default function* rootSaga() {
  yield all([fork(accidentSaga)]);
}

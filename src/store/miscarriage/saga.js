import actions from './actions';
import { miscarriage } from '../../services/miscarriage';
import { id } from '../selectors';
import { put, all, takeLatest, select, fork } from 'redux-saga/effects';

export function* miscarriageSaga() {
  yield takeLatest(actions.MISCARRIAGE_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield miscarriage(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.MISCARRIAGE_SUCCESS, data: res.data });
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
  yield all([fork(miscarriageSaga)]);
}

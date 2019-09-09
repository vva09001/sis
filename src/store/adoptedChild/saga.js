import actions from './actions';
import { adoptedChild } from '../../services/adoptedChild';
import { id } from '../selectors';
import { put, all, takeLatest, select, fork } from 'redux-saga/effects';

export function* adoptedChildSaga() {
  yield takeLatest(actions.ADOPTED_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield adoptedChild(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.ADOPTED_SUCCESS, data: res.data });
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
  yield all([fork(adoptedChildSaga)]);
}

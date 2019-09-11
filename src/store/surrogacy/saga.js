import actions from './actions';
import { surrogacy, thanksurrogacy } from '../../services/surrogacy';
import { id } from '../selectors';
import { put, all, takeLatest, select, fork } from 'redux-saga/effects';

export function* surrogacySaga() {
  yield takeLatest(actions.SURROGACY_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield surrogacy(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.SURROGACY_SUCCESS, data: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail('Không thể kết nối đến server');
    }
  });
}

export function* thanksurrogacySaga() {
  yield takeLatest(actions.THANK_SURROGACY_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const userid = yield select(id);
      const res = yield thanksurrogacy(params, userid);
      if (res.status === 200) {
        yield put({ type: actions.THANK_SURROGACY_SUCCESS, data: res.data });
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
  yield all([fork(thanksurrogacySaga), fork(surrogacySaga)]);
}

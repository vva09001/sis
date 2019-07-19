import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Register, Login } from '../../services/user';
import { userActions } from '../../store/actions';
import token from '../../utils/token';

export function* registerSaga() {
  yield takeEvery(actions.REGISTER_REQUEST, function*(data) {
    try {
      yield put({ type: userActions.REGISTER_LOADING });
      // yield formData.append('username', 'vanh');
      // console.log(formData);
      const res = yield Register(data.params, token);
      yield put({ type: userActions.REGISTER_SUCCESS, data: res });
    } catch (error) {
      yield put({ type: userActions.REGISTER_ERROR });
    }
  });
}

export function* loginSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, function*(data) {
    const { params, success, fail } = data;
    try {
      const res = yield Login(params);
      if (res.status === 200) {
        yield put({ type: userActions.LOGIN_SUCCESS, auth: res.data });
        yield success();
      } else {
        yield fail(res.data.message);
      }
    } catch (error) {
      yield fail();
    }
  });
}

export default function* rootSaga() {
  yield all([fork(registerSaga), fork(loginSaga)]);
}

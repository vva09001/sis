import actions from './actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { Register, Login } from '../../services/user';
import { userActions } from '../../store/actions';
import token from '../../utils/token';

export function* registerSaga() {
  yield takeEvery(actions.REGISTER_REQUEST, function*(data) {
    try {
      // let formBody = [];
      // for (let property in data.params) {
      //     let encodedKey = encodeURIComponent(property);
      //     let encodedValue = encodeURIComponent(params[property]);
      //     formBody.push(encodedKey + “=” + encodedValue);
      // }
      // formBody = formBody.join(“&”);
      // console.log(Register(data.params, token));
      Register(data.params, token);
      yield put({ type: userActions.REGISTER_LOADING });
    } catch (error) {
      yield put({ type: userActions.REGISTER_ERROR });
    }
  });
}

export function* loginSaga() {
  yield takeEvery(actions.LOGIN_REQUEST, function*(data) {
    try {
      const res = yield Login(data.params);
      if (res.status === 200) {
        yield put({ type: userActions.REGISTER_SUCCESS, auth: res.data });
      }
      // console.log(res.status);
    } catch (error) {
      yield put({ type: userActions.LOGIN_ERROR });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(registerSaga), fork(loginSaga)]);
}

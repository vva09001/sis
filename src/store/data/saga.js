import actions from './actions';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { GetBrands, GetPackageData } from 'services/data';
import { errorActions } from 'store/actions';

export function* getBrandsSaga() {
  yield takeEvery(actions.GET_BRAND_REQUEST, function*() {
    try {
      yield put({ type: actions.DATA_LOADING, loading: true });

      // Get request
      const res = yield call(GetBrands);
      if (res.status === 200) {
        yield put({ type: actions.GET_BRAND_SUCCESS, payload: res.data });
      } else {
        yield put({ type: actions.ERROR, error: res.data });
      }

      yield put({ type: actions.DATA_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}
export function* getPackageSaga() {
  yield takeEvery(actions.GET_PACKAGE_REQUEST, function*() {
    try {
      yield put({ type: actions.DATA_LOADING, loading: true });

      // Get request
      const data = {
        package: 297,
        subpackage: ''
      };
      const res = yield call(GetPackageData, data);

      if (res.status === 200) {
        yield put({ type: actions.GET_PACKAGE_SUCCESS, payload: res.data[0].data });
      } else {
        yield put({ type: actions.ERROR, error: res.data });
      }

      yield put({ type: actions.DATA_LOADING, loading: false });
    } catch (error) {
      yield put({ type: errorActions.ERROR, error: error.message });
    }
  });
}
export default function* rootSaga() {
  yield all([fork(getBrandsSaga), fork(getPackageSaga)]);
}

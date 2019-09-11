import { all } from 'redux-saga/effects';
import userSagas from 'store/user/saga';
import maternitySagas from './maternity/saga';
import childbirthSagas from './childbirth/saga';
import adoptedChildSagas from './adoptedChild/saga';
import miscarriageSagas from './miscarriage/saga';
import contraceptionSagas from './contraception/saga';
import surrogacySagas from './surrogacy/saga';
import maintenanceSagas from './maintenance/saga';
import sickSagas from './sick/saga';
import occupationalDiseaseSaga from './occupationalDisease/saga';
import unemployedSaga from './unemployed/saga';

export default function* rootSaga() {
  yield all([
    userSagas(),
    maternitySagas(),
    childbirthSagas(),
    adoptedChildSagas(),
    miscarriageSagas(),
    contraceptionSagas(),
    surrogacySagas(),
    maintenanceSagas(),
    sickSagas(),
    occupationalDiseaseSaga(),
    unemployedSaga()
  ]);
}

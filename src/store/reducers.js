import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user/reducer';
import maternity from './maternity/reducer';
import childbirth from './childbirth/reducer';
import adoptedChild from './adoptedChild/reducer';
import miscarriage from './miscarriage/reducer';
import contraception from './contraception/reducer';
import surrogacy from './surrogacy/reducer';
import maintenance from './maintenance/reducer';
import sick from './sick/reducer';
import occupationalDisease from './occupationalDisease/reducer';

const reducers = combineReducers({
  user: user,
  maternity: maternity,
  childbirth: childbirth,
  adoptedChild: adoptedChild,
  miscarriage: miscarriage,
  contraception: contraception,
  surrogacy: surrogacy,
  maintenance: maintenance,
  sick: sick,
  occupationalDisease: occupationalDisease
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;

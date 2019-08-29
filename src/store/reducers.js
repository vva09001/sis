import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user/reducer';
import maternity from './maternity/reducer';

const reducers = combineReducers({
  user: user,
  maternity: maternity
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;

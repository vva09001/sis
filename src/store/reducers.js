import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Data from 'store/data/reducer';
import User from 'store/user/reducer';
import Error from 'store/error/reducer';

const reducers = combineReducers({
  Data,
  User,
  Error
});
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['Error', 'Data']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;

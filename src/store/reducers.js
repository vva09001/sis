import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user/reducer';
import error from '../store/error/reducer';

const reducers = combineReducers({
  user: user,
  error: error
});
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['Error']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;

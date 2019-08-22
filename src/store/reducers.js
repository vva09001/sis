import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user/reducer';

const reducers = combineReducers({
  user: user
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;

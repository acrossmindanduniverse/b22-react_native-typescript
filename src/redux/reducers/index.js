import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

import users from './users';

const persistAuth = {
  storage: AsyncStorage,
  key: 'users',
};

const reducer = combineReducers({
  users: persistReducer(persistAuth, users),
});

export default reducer;

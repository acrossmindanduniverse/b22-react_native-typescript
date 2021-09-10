import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

import users from './users';

const persist = {
  storage: AsyncStorage,
  key: 'users',
};

const reducer = combineReducers({
  users: persistReducer(persist, users),
});

export default reducer;

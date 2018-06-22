import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './ducks/userReducer';
import newUserReducer from './ducks/newUserReducer';

const combinedReducers = combineReducers({
  user: userReducer, newUserReducer


});

const store = createStore(
  combinedReducers,
  applyMiddleware(promiseMiddleware())
);

export default store;

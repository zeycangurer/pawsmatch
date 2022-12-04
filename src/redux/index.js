import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {app} from './reducers';

const store = configureStore({
  reducer: combineReducers({app}),
  middleware: [thunk],
});

export default store;

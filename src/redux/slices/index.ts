import { combineReducers } from '@reduxjs/toolkit';
import usersSlice from './users';

export const indexReducer = combineReducers({
  users: usersSlice
});

/*
 * combines all th existing reducers
 */
import counterSlice from './counterSlice';

import { combineReducers } from '@reduxjs/toolkit';

const reducers = {
    counter: counterSlice,
};

// Exports

const rootReducer = combineReducers(reducers);
export default rootReducer;

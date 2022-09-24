/*
 * combines all th existing reducers
 */
import counterSlice from './counterSlice';

import { combineReducers } from '@reduxjs/toolkit';
import themeSlice from './themeSlice';

const reducers = {
    counter: counterSlice,
    theme:themeSlice
};

// Exports

const rootReducer = combineReducers(reducers);
export default rootReducer;

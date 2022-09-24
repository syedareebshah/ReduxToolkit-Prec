import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './slices/index'
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const config = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['counter'],
  debug: true, //to get useful logging
};
const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
}

const enhancers = [...middleware];
const persistConfig = {enhancers};


const persistedReducer = persistReducer(config, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

export const persistor = persistStore(store,persistConfig);

 

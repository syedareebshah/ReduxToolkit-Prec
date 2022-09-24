import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './slices/index'

const config = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['loading'],
  debug: true, //to get useful logging
};

const persistedReducer = persistReducer(config, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

 

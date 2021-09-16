import { configureStore } from '@reduxjs/toolkit';
import setsReducer from './setsSlice';

const store = configureStore({
  reducer: {
    sets: setsReducer,
  }
});

export default store;

export type AppDispatch = typeof store.dispatch
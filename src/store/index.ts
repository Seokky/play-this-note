import { configureStore } from '@reduxjs/toolkit';
import setsReducer from './setsSlice';
import trainerReducer from './trainerSlice';

const store = configureStore({
  reducer: {
    sets: setsReducer,
    trainer: trainerReducer,
  }
});

export default store;

export type AppDispatch = typeof store.dispatch
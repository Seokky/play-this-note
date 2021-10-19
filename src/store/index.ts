import { configureStore } from '@reduxjs/toolkit';
import setsReducer from './setChooser';
import trainerReducer from './trainer';

const store = configureStore({
  reducer: {
    sets: setsReducer,
    trainer: trainerReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch

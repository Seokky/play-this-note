import { configureStore } from '@reduxjs/toolkit';
import setChooser from './setChooser';
import trainer from './trainer';
import setCreator from './setCreator';

const store = configureStore({
  reducer: {
    setChooser,
    setCreator,
    trainer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch

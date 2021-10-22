import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicalNote } from '../types/MusicalNote';

interface State {
  title: string;
  notes: MusicalNote[];
}

const initialState: State = {
  title: '',
  notes: [],
};

export const setCreator = createSlice({
  name: 'setCreator',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    addNote: (state, action: PayloadAction<MusicalNote>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<MusicalNote>) => {
      const i = state.notes.findIndex((note) => note === action.payload);

      if (i >= 0) {
        state.notes.splice(i, 1);
      }
    },
  },
});

export const { setTitle, addNote, removeNote } = setCreator.actions;

export default setCreator.reducer;

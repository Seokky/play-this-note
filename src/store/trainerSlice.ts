import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicalNote } from '../types/MusicalNote';

interface TrainerState {
  playing: boolean;
  noteToPlay: MusicalNote;
  notePlaying: MusicalNote | '';
}

const initialState: TrainerState = {
  playing: false,
  noteToPlay: 'F#5',
  notePlaying: '',
};

export const trainerSlice = createSlice({
  name: 'trainer',
  initialState,
  reducers: {
    togglePlaying: (state, action: PayloadAction) => {
      state.playing = !state.playing;
    },
    setNotePlaying: (state, action: PayloadAction<TrainerState['notePlaying']>) => {
      state.notePlaying = action.payload;
    },
    setNoteToPlay: (state, action: PayloadAction<TrainerState['noteToPlay']>) => {
      state.noteToPlay = action.payload;
    },
  },
});

export const { togglePlaying, setNotePlaying, setNoteToPlay } = trainerSlice.actions;

export default trainerSlice.reducer;

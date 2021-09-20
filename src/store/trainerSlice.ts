import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TrainerState {
  playing: boolean;
  noteToPlay: string;
  notePlaying: string;
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
    setNotePlaying: (state, action: PayloadAction<string>) => {
      state.notePlaying = action.payload;
    },
    setNoteToPlay: (state, action: PayloadAction<string>) => {
      state.noteToPlay = action.payload;
    },
  }
});

export const {
  togglePlaying,
  setNotePlaying,
  setNoteToPlay
} = trainerSlice.actions;

export default trainerSlice.reducer;
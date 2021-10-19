import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MusicalNote } from '../types/MusicalNote';

interface TrainerState {
  playing: boolean;
  noteToPlay: MusicalNote;
  notePlaying: MusicalNote | '';
}

export const trainer = createSlice({
  name: 'trainer',

  initialState: {
    playing: false,
    noteToPlay: 'F#5',
    notePlaying: '',
  } as TrainerState,

  reducers: {
    togglePlaying: (state) => {
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

export const { togglePlaying, setNotePlaying, setNoteToPlay } = trainer.actions;

export default trainer.reducer;

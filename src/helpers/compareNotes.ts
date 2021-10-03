import { PlayingNoteScore } from 'types/PlayingNoteScore';
import { PITCHES } from 'app-constants/pitches';
import { MusicalNote as Note } from '../types/MusicalNote';

export const getHighestNote = (a: Note, b: Note) => {
  const hasA = Object.prototype.hasOwnProperty.call(PITCHES, a);
  const hasB = Object.prototype.hasOwnProperty.call(PITCHES, b);

  if (!hasA || !hasB) {
    throw new Error(`getHighestNote: Incorrect note name: ${a}, ${b}`);
  }

  return PITCHES[a] > PITCHES[b] ? a : b;
};

export const getNoteScore = (noteToPlay: Note, notePlaying: Note): PlayingNoteScore => {
  if (noteToPlay === notePlaying) return 'equal';

  return getHighestNote(noteToPlay, notePlaying) === noteToPlay ? 'too low' : 'too high';
};

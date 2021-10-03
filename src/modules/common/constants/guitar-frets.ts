import { MusicalNote } from '../../../types/MusicalNote';

export const FRETS: Record<number, MusicalNote[]> = {
  0: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'] as MusicalNote[],
  1: ['F4', 'C4', 'G#3', 'D#3', 'A#2', 'F2'] as MusicalNote[],
  2: ['F#4', 'C#4', 'A3', 'E3', 'B2', 'F#2'] as MusicalNote[],
  3: ['G4', 'D4', 'A#3', 'F3', 'C3', 'G2'] as MusicalNote[],
  4: ['G#4', 'D#4', 'B3', 'F#3', 'C#3', 'G#2'] as MusicalNote[],
  5: ['A4', 'E4', 'C4', 'G3', 'D3', 'A2'] as MusicalNote[],
  6: ['A#4', 'F4', 'C#4', 'G#3', 'D#3', 'A#2'] as MusicalNote[],
  7: ['B4', 'F#4', 'D4', 'A3', 'E3', 'B2'] as MusicalNote[],
  8: ['C5', 'G4', 'D#4', 'A#3', 'F3', 'C3'] as MusicalNote[],
  9: ['C#5', 'G#4', 'E4', 'B3', 'F#3', 'C#3'] as MusicalNote[],
  10: ['D5', 'A4', 'F4', 'C4', 'G3', 'D3'] as MusicalNote[],
  11: ['D#5', 'A#4', 'F#4', 'C#4', 'G#3', 'D#3'] as MusicalNote[],
  12: ['E5', 'B4', 'G4', 'D4', 'A3', 'E3'] as MusicalNote[],
};

export const getFirstNFrets = (n: number) => {
  if (n < 0 || n > 12) throw new Error('Incorrect frets number');

  const frets: Array<MusicalNote[]> = [];
  for (let i = 0; i <= n; i += 1) {
    frets.push(FRETS[i]);
  }

  return frets.flat();
};

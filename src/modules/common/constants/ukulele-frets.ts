import { MusicalNote } from 'types/MusicalNote';

export const FRETS: Record<number, MusicalNote[]> = {
  0: ['A4', 'E4', 'C4', 'G4'] as MusicalNote[],
  1: ['A#4', 'F4', 'C#4', 'G#4'] as MusicalNote[],
  2: ['B4', 'F#4', 'D4', 'A4'] as MusicalNote[],
  3: ['C5', 'G4', 'D#4', 'A#4'] as MusicalNote[],
  4: ['C#5', 'G#4', 'E4', 'B4'] as MusicalNote[],
  5: ['D5', 'A4', 'F4', 'C5'] as MusicalNote[],
  6: ['D#5', 'A#4', 'F#4', 'C#5'] as MusicalNote[],
  7: ['E5', 'B4', 'G4', 'D5'] as MusicalNote[],
  8: ['F5', 'C5', 'G#4', 'D#5'] as MusicalNote[],
  9: ['F#5', 'C#5', 'A4', 'E5'] as MusicalNote[],
  10: ['G5', 'D5', 'A#4', 'F5'] as MusicalNote[],
  11: ['G#5', 'D#5', 'B4', 'F#5'] as MusicalNote[],
  12: ['A5', 'E5', 'C5', 'G5'] as MusicalNote[],
};

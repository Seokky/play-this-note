import { PITCHES } from './pitches';
import { MusicalNote } from '../types/MusicalNote';
import {
  CONTRA,
  FOUR_LINE,
  GREAT,
  ONE_LINE,
  SMALL,
  SUB_CONTRA,
  THREE_LINE,
  TWO_LINE,
} from './octaves';
import { FIFTH, FIRST, FOURTH, SECOND, SIXTH, THIRD } from './guitar-strings';
import { FRETS } from './guitar-frets';

export const NOTES = {
  ALL: Object.keys(PITCHES) as MusicalNote[],
  OCTAVES: {
    SUB_CONTRA,
    CONTRA,
    GREAT,
    SMALL,
    ONE_LINE,
    TWO_LINE,
    THREE_LINE,
    FOUR_LINE,
  },
  GUITAR: {
    STRINGS: {
      FIRST,
      SECOND,
      THIRD,
      FOURTH,
      FIFTH,
      SIXTH,
    },
    FRETS,
  },
};

import { MusicalNote } from 'types/MusicalNote';
import { PITCHES } from './pitches';
import * as OCTAVES from './octaves';
import * as GUITAR_STRINGS from './guitar-strings';
import { FRETS as GUITAR_FRETS } from './guitar-frets';
import * as UKULELE_STRINGS from './ukulele-strings';
import { FRETS as UKULELE_FRETS } from './ukulele-frets';

export const NOTES = {
  ALL: Object.keys(PITCHES) as MusicalNote[],
  OCTAVES,
  GUITAR: {
    STRINGS: GUITAR_STRINGS,
    FRETS: GUITAR_FRETS,
  },
  UKULELE: {
    STRINGS: UKULELE_STRINGS,
    FRETS: UKULELE_FRETS,
  },
};

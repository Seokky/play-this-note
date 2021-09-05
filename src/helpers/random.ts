import { GuitarString } from 'types/GuitarString';
import { STRINGS, NOTES } from 'app-constants';

export const getRandomNumber = (max: number) => Math.floor(Math.random() * Math.floor(max));

export const getRandomString = () => STRINGS[getRandomNumber(STRINGS.length)];

export const getRandomNote = (string: GuitarString) =>
  NOTES[string][getRandomNumber(NOTES[string].length)];
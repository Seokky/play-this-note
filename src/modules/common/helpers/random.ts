import { MusicalNote } from 'types/MusicalNote';

export const getRandomNumber = (max: number) => Math.floor(Math.random() * Math.floor(max));

export const getRandomNote = (notes: MusicalNote[]) => notes[getRandomNumber(notes.length)];

import { NOTES } from 'modules/common/constants/notes';

export const getRandomNumber = (max: number) => Math.floor(Math.random() * Math.floor(max));

export const getRandomNote = () => NOTES.ALL[getRandomNumber(NOTES.ALL.length)];

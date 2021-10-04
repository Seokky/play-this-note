import { MusicalNote } from 'types/MusicalNote';

export const getFirstNFrets = (
  n: number,
  ALL_FRETS: Record<number, MusicalNote[]>,
) => {
  if (n < 0 || n > 12) throw new Error('Incorrect frets number');

  const frets: Array<MusicalNote[]> = [];
  for (let i = 0; i <= n; i += 1) {
    frets.push(ALL_FRETS[i]);
  }

  return frets.flat();
};

import React, { useState } from 'react';

import { STRINGS, NOTES } from 'app-constants';

import PairCircle from './PairCircle/PairCircle';

export default function NotesTabContent() {
  const [string, setString] = useState<string>('A');
  const [note, setNote] = useState<string>('A');

  const getRandomNumber = (max: number) => Math.floor(Math.random() * Math.floor(max));

  const getRandomString = () => STRINGS[getRandomNumber(STRINGS.length)];

  const getRandomNote = () => NOTES[getRandomNumber(NOTES.length)];

  const getRandomPair = () => {
    setString(getRandomString());
    setNote(getRandomNote());
  };

  return (
    <div>
      <PairCircle string={string} note={note} />

      <button className="app-button" onClick={getRandomPair}>
        Generate
      </button>
    </div>
  );
}

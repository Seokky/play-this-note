import React from 'react';
import styles from './PairOfNotes.module.css';
import NoteToPlay from '../NoteToPlay/NoteToPlay';
import NotePlaying from '../NotePlaying/NotePlaying';

export default function PairOfNotes() {
  return (
    <div className={styles.wrapper}>
      <NoteToPlay />

      <NotePlaying />
    </div>
  );
}

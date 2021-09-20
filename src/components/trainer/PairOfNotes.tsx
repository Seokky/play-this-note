import React from 'react';
import styles from 'assets/styles/components/trainer/PairOfNotes.module.css';
import NoteToPlay from './NoteToPlay';
import NotePlaying from './NotePlaying';

export default function PairOfNotes() {
  return (
    <div className={styles.wrapper}>
      <NoteToPlay />

      <NotePlaying />
    </div>
  );
}

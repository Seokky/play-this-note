import React from 'react';
import { RootState } from 'types/RootState';
import { useSelector } from 'react-redux';
import styles from 'modules/trainer/components/NoteToPlay/NoteToPlay.module.css';

export default function NoteToPlay() {
  const note = useSelector((state: RootState) => state.trainer.noteToPlay);

  return (
    <div className={styles.wrapper}>
      { note }
    </div>
  );
}

import React from 'react';
import { MusicalNote } from 'types/MusicalNote';
import clsx from 'clsx';
import styles from './NotesItem.module.css';

type Props = {
  note: MusicalNote;
  checked: boolean;
  onClick: (note: MusicalNote) => void;
}

export default function NotesItem({ note, checked, onClick }: Props) {
  const classNames = clsx([
    styles.wrapper,
    checked && styles['wrapper--checked'],
  ]);

  return (
    <div
      className={classNames}
      onClick={onClick.bind(null, note)}
    >
      <span className={styles.title}>{note}</span>
      <span className={styles.circle} />
    </div>
  );
}

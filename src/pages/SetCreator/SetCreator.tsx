import React from 'react';
import { NOTES } from 'modules/common/constants/notes';
import NameInput from 'modules/set-creator/components/NameInput/NameInput';
import clsx from 'clsx';
import styles from './SetCreator.module.css';

export default function SetCreator() {
  const classNames = clsx([
    'app-container',
    styles.wrapper,
  ]);

  return (
    <div className={classNames}>
      <NameInput />

      {
        NOTES.ALL.map((note) => <div key={note}>{note}</div>)
      }
    </div>
  );
}

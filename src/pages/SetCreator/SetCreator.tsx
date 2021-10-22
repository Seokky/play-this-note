import React from 'react';
import NameInput from 'modules/set-creator/components/NameInput/NameInput';
import AllNotesList from 'modules/set-creator/components/AllNotesList/AllNotesList';
import FooterActions from 'modules/set-creator/components/FooterActions/FooterActions';
import styles from './SetCreator.module.css';

export default function SetCreator() {
  return (
    <div className={styles.wrapper}>
      <NameInput />

      <div className={styles.notes}>
        <AllNotesList />
      </div>

      <FooterActions />
    </div>
  );
}

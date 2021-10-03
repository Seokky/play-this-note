import React from 'react';
import styles from 'assets/styles/components/home/ListOfNotesSets.module.css';
import AppList from 'components/app/AppList';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/RootState';

export default function ListOfNotesSets() {
  const sets = useSelector((s: RootState) => s.sets.sets);

  return (
    <div className={styles.wrapper}>
      <AppList list={sets} />
    </div>
  );
}

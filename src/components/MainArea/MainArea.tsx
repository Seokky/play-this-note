import React from 'react';
import { Tab } from 'components/ModeTabs/ModeTabs';
import styles from './MainArea.module.css';
import NotesTabContent from './NotesTabContent/NotesTabContent';
import ChordsTabContent from './ChordsTabContent/ChordsTabContent';

export default function MainArea({ tab }: { tab: Tab }) {
  const displays = {
    notes: NotesTabContent,
    chords: ChordsTabContent,
  };

  const CurrentDisplay = displays[tab];

  return (
    <div className={styles.wrapper}>
      <CurrentDisplay />
    </div>
  );
}

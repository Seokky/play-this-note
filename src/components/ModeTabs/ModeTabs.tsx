import React, { useState } from 'react';
import styles from './ModeTabs.module.css';
import AppButton from 'components/AppButton/AppButton';

export type Tab = 'notes' | 'chords';

type Props = {
  onTabChanged: (tab: Tab) => void;
}

export default function ModeTabs({ onTabChanged }: Props) {
  const [currentTab, setTab] = useState('notes');

  const onTabClick = (tab: Tab) => {
    setTab(tab);
    onTabChanged(tab);
  };

  return (
    <div className={styles.wrapper}>
      <AppButton secondary={currentTab === 'notes'}
                 onClick={() => onTabClick('notes')}>
        Notes
      </AppButton>

      <AppButton secondary={currentTab === 'chords'}
                 onClick={() => onTabClick('chords')}>
        Chords
      </AppButton>
    </div>
  );
}

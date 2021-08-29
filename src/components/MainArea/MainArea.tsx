import React from 'react';

import { Tab } from 'components/ModeTabs/ModeTabs';

import './MainArea.css';

import NotesTabContent from './NotesTabContent/NotesTabContent';
import ChordsTabContent from './ChordsTabContent/ChordsTabContent';

export default function MainArea({ tab }: { tab: Tab }) {
  const displays = {
    notes: NotesTabContent,
    chords: ChordsTabContent,
  };

  const CurrentDisplay = displays[tab];

  return (
    <div className="app-main-area">
      <CurrentDisplay />
    </div>
  );
}

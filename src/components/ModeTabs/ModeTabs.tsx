import React, { useState } from 'react';
import './ModeTabs.css';

export type Tab = 'notes' | 'chords';

export default function ModeTabs({ onTabChanged }: { onTabChanged: (tab: Tab) => void }) {
  const [currentTab, setTab] = useState('notes');

  const onTabClick = (tab: Tab) => {
    setTab(tab);
    onTabChanged(tab);
  };

  const getTabClasses = (tab: Tab) => {
    return currentTab === tab ? 'app-button app-button--secondary' : 'app-button';
  };

  return (
    <div className="app-mode-tabs">
      <button className={getTabClasses('notes')} onClick={() => onTabClick('notes')}>
        Notes
      </button>

      <button className={getTabClasses('chords')} onClick={() => onTabClick('chords')}>
        Chords
      </button>
    </div>
  );
}

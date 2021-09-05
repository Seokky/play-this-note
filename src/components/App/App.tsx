import React, { useState } from 'react';

import 'styles/reset.css';
import 'styles/fontface.css';
import 'styles/root.css';

import './App.css';

import AppHeader from 'components/AppHeader/AppHeader';
import ModeTabs, { Tab } from 'components/ModeTabs/ModeTabs';
import MainArea from 'components/MainArea/MainArea';

function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('notes');
  const onTabChanged = (tab: Tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="app">
      <AppHeader />

      <ModeTabs onTabChanged={onTabChanged} />

      <MainArea tab={currentTab} />
    </div>
  );
}

export default App;

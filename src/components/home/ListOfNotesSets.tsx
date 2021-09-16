import React, { Component } from 'react';
import { AppList as TAppList } from 'types/AppList';

import { store } from 'store';

import styles from 'assets/styles/components/home/ListOfNotesSets.module.css';

import AppList from 'components/app/AppList';

type State = {
  list: TAppList;
}

export default class ListOfNotesSets extends Component<{}, State> {
  state: State = {
    list: store.state.listOfNotesSets,
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <AppList list={this.state.list} />
      </div>
    );
  }
}
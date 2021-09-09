import React, { Component } from 'react';
import { AppList as TAppList } from 'types/AppList';

import { LIST_OF_NOTES_SETS_INITIAL } from 'app-constants';

import styles from './ListOfNotesSets.module.css';

import CreateSetOfNotesBtn from 'components/home/ListOfNotesSets/CreateSetOfNotesBtn/CreateSetOfNotesBtn';
import AppList from 'components/AppList/AppList';

type State = {
  list: TAppList;
}

export default class ListOfNotesSets extends Component<{}, State> {
  state: State = {
    list: LIST_OF_NOTES_SETS_INITIAL,
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.btn}>
          <CreateSetOfNotesBtn />
        </div>

        <div className={styles.list}>
          <AppList list={this.state.list} />
        </div>
      </div>
    );
  }
}
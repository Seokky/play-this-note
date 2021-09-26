import React, { Component } from 'react';
import { AppList as TAppList } from 'types/AppList';
import styles from 'assets/styles/components/app/AppList.module.css';
import AppListItem from './AppListItem';

type Props = {
  list: TAppList;
};

export default class AppList extends Component<Props> {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.list
          .filter((group) => !!group.items.length)
          .map((group) => (
            <div key={group.title} className={styles.group}>
              <AppListItem group={group} />
            </div>
          ))}
      </div>
    );
  }
}

import React from 'react';
import { AppList as TAppList } from 'types/AppList';
import styles from 'assets/styles/components/app/AppList.module.css';
import AppListItem from './AppListItem';

type Props = {
  list: TAppList;
};

export default function AppList({ list }: Props) {
  return (
    <div className={styles.wrapper}>
      {list
        .filter((i) => !!i.items.length)
        .map((i) => (
          <div key={i.title} className={styles.group}>
            <AppListItem item={i} />
          </div>
        ))}
    </div>
  );
}

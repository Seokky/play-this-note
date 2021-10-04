import React from 'react';
import { AppList as TAppList } from 'types/AppList';
import { AppListItemTitle } from 'types/AppListItemTitle';
import styles from './AppList.module.css';
import AppListItem from './components/AppListItem/AppListItem';

type Props = {
  list: TAppList;
  onItemClick: (itemTitle: AppListItemTitle) => void;
  onSubItemClick: (itemTitle: AppListItemTitle, subItemTitle: string) => void;
};

export default function AppList({ list, onItemClick, onSubItemClick }: Props) {
  return (
    <div className={styles.wrapper}>
      {list
        .filter((i) => !!i.items.length)
        .map((i) => (
          <div
            key={i.title}
            className={styles.group}
          >
            <AppListItem
              item={i}
              onClick={() => onItemClick(i.title)}
              onSubItemClick={onSubItemClick}
            />
          </div>
        ))}
    </div>
  );
}

import React from 'react';
import { AppList as TAppList } from 'types/AppList';
import { AppListGroupTitle } from 'types/AppListGroupTitle';
import styles from './AppList.module.css';
import AppListItem from './components/AppListItem/AppListItem';

type Props = {
  list: TAppList;
  onItemClick: (itemTitle: AppListGroupTitle) => void;
  onSubItemClick: (itemTitle: AppListGroupTitle, subItemTitle: string) => void;
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

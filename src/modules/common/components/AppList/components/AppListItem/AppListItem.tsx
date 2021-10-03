import React from 'react';
import clsx from 'clsx';
import { AppListGroupTitle } from 'types/AppListGroupTitle';
import { AppListItem as TAppListItem } from 'types/AppListItem';
import angleSvg from 'assets/icons/angle-down.svg';
import styles from './AppListItem.module.css';
import AppListSubItem from '../AppListSubItem/AppListSubItem';

type Props = {
  item: TAppListItem;
  onClick: () => void;
  onSubItemClick: (itemTitle: AppListGroupTitle, subItemTitle: string) => void;
};

export default function AppListItem({ item, onClick, onSubItemClick }: Props) {
  const hasItems = item.items.length > 0;
  const isSubItemsShown = hasItems && item.expanded;

  const wrapperClassNames = clsx([
    styles.wrapper,
    item.expanded && styles['wrapper--expanded'],
  ]);

  return (
    <div className={wrapperClassNames}>
      <div
        className={styles.title}
        onClick={onClick}
      >

        {item.title}

        {hasItems && (
          <img
            src={angleSvg}
            alt="expand"
          />
        )}
      </div>

      {isSubItemsShown && (
        <div className={styles.items}>
          {item.items.map((i) => (
            <AppListSubItem
              key={i.title}
              item={i}
              onClick={() => onSubItemClick(item.title, i.title)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

import React from 'react';
import clsx from 'clsx';
import { AppListSubItem as TAppListSubItem } from 'types/AppListSubItem';
import styles from './AppListSubItem.module.css';

type Props = {
  item: TAppListSubItem;
  onClick: () => void;
};

export default function AppListSubItem({ item, onClick }: Props) {
  const classNames = clsx([
    styles.wrapper,
    item.checked && styles['wrapper--checked'],
  ]);

  return (
    <div
      className={classNames}
      onClick={onClick}
    >
      <span className={styles.title}>{item.title}</span>
      <span className={styles.circle} />
    </div>
  );
}

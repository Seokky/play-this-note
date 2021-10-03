import React from 'react';
import { expandListItem } from 'store/setsSlice';
import clsx from 'clsx';
import { AppListItem as TAppListItem } from 'types/AppListItem';
import angleSvg from 'assets/icons/angle-down.svg';
import styles from 'assets/styles/components/app/AppListGroup.module.css';
import { useDispatch } from 'react-redux';
import AppListSubItem from './AppListSubItem';

type Props = {
  item: TAppListItem;
};

export default function AppListItem({ item }: Props) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(expandListItem(item.title));
  };

  const hasItems = item.items.length > 0;
  const isSubItemsShown = hasItems && item.expanded;

  const wrapperClassNames = clsx([styles.wrapper, item.expanded && styles['wrapper--expanded']]);

  return (
    <div className={wrapperClassNames}>
      <div
        className={styles.title}
        onClick={onClick}
      >

        {item.title}

        {hasItems && <img src={angleSvg} alt="expand" />}
      </div>

      {isSubItemsShown && (
        <div className={styles.items}>
          {item.items.map((i) => (
            <AppListSubItem
              key={i.title}
              item={i}
              parentTitle={item.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

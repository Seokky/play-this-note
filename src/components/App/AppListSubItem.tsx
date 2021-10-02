import React from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { AppListSubItem as TAppListSubItem } from 'types/AppListSubItem';
import { checkListSubItem, getPickedSet } from 'store/setsSlice';
import styles from 'assets/styles/components/app/AppListGroupItem.module.css';

type Props = {
  parentTitle: string;
  item: TAppListSubItem;
};

export default function AppListSubItem({ item, parentTitle }: Props) {
  const dispatch = useDispatch();
  const classNames = clsx([styles.wrapper, item.checked && styles['wrapper--checked']]);

  const toggleCheck = () => {
    dispatch(checkListSubItem({ itemTitle: parentTitle, subItemTitle: item.title }));
    console.log(dispatch(getPickedSet()));
  };

  return (
    <div className={classNames} onClick={toggleCheck}>
      <span className={styles.title}>{item.title}</span>
      <span className={styles.circle} />
    </div>
  );
}

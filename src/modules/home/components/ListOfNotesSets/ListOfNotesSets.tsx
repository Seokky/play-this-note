import React from 'react';
import AppList from 'modules/common/components/AppList/AppList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/RootState';
import { AppListGroupTitle } from 'types/AppListGroupTitle';
import { checkListSubItem, expandListItem, setPickedSet } from 'store/setsSlice';
import styles from './ListOfNotesSets.module.css';

export default function ListOfNotesSets() {
  const dispatch = useDispatch();
  const sets = useSelector((s: RootState) => s.sets.sets);

  const onItemClick = (itemTitle: AppListGroupTitle) => {
    dispatch(expandListItem(itemTitle));
  };

  const onSubItemClick = (itemTitle: AppListGroupTitle, subItemTitle: string) => {
    dispatch(
      checkListSubItem({ itemTitle, subItemTitle }),
    );
    dispatch(
      setPickedSet(),
    );
  };

  return (
    <div className={styles.wrapper}>
      <AppList
        list={sets}
        onItemClick={onItemClick}
        onSubItemClick={onSubItemClick}
      />
    </div>
  );
}

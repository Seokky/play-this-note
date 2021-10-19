import React from 'react';
import AppList from 'modules/common/components/AppList/AppList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/RootState';
import { AppListItemTitle } from 'types/AppListItemTitle';
import setChooser, { checkListSubItem, expandListItem, setPickedSet } from 'store/setChooser';
import styles from './ListOfNotesSets.module.css';

export default function ListOfNotesSets() {
  const dispatch = useDispatch();
  const sets = useSelector((s: RootState) => s.setChooser.sets);

  const onItemClick = (itemTitle: AppListItemTitle) => {
    dispatch(expandListItem(itemTitle));
  };

  const onSubItemClick = (itemTitle: AppListItemTitle, subItemTitle: string) => {
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

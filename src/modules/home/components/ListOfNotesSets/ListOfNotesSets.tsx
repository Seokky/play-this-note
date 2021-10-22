import React, { useEffect } from 'react';
import AppList from 'modules/common/components/AppList/AppList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/RootState';
import { AppListItemTitle } from 'types/AppListItemTitle';
import {
  addMyOwnSet, checkListSubItem, expandListItem, setPickedSet,
} from 'store/setChooser';
import { useLocalStorage } from 'react-use';
import { STORAGE_CUSTOM_SETS_KEY } from 'modules/set-creator/constants';
import styles from './ListOfNotesSets.module.css';

export default function ListOfNotesSets() {
  const dispatch = useDispatch();
  const sets = useSelector((s: RootState) => s.setChooser.sets);
  const customSets = sets.find((s) => s.title === 'Мои наборы');
  const [lsCustomSets] = useLocalStorage(STORAGE_CUSTOM_SETS_KEY, []);

  useEffect(() => {
    if (customSets && !customSets.items.length && lsCustomSets) {
      lsCustomSets.forEach((s) => {
        dispatch(addMyOwnSet(s));
      });
    }
  }, []);

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

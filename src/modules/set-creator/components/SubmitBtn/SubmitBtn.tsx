import React from 'react';
import AppButton from 'modules/common/components/AppButton/AppButton';
import AppIcon from 'modules/common/components/AppIcon/AppIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/RootState';
import { useHistory } from 'react-router-dom';
import { addMyOwnSet, expandListItem } from 'store/setChooser';
import { useLocalStorage } from 'react-use';
import styles from './SubmitBtn.module.css';
import { STORAGE_CUSTOM_SETS_KEY } from '../../constants';

export default function SubmitBtn() {
  const dispatch = useDispatch();
  const notes = useSelector((s: RootState) => s.setCreator.notes);
  const title = useSelector((s: RootState) => s.setCreator.title);
  const history = useHistory();
  const [_, setCustomSets] = useLocalStorage<any>(STORAGE_CUSTOM_SETS_KEY, []);

  const create = () => {
    const newSet = {
      title,
      notes,
      checked: false,
    };

    dispatch(addMyOwnSet(newSet));

    setCustomSets((sets: any) => sets?.concat([newSet]));

    dispatch(expandListItem('Мои наборы'));

    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <AppButton
        disabled={notes.length < 2 || !title.length}
        onClick={create}
      >
        <>
          <AppIcon
            name="arrow-right"
            style={{ marginRight: 12 }}
          />
          Создать
        </>
      </AppButton>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import AppButton from 'modules/common/components/AppButton/AppButton';
import AppIcon from 'modules/common/components/AppIcon/AppIcon';
import { useSelector } from 'react-redux';
import { RootState } from 'types/RootState';
import styles from './SubmitBtn.module.css';
import setChooser from '../../../../store/setChooser';

export default function SubmitBtn() {
  const pickedSet = useSelector((s: RootState) => s.setChooser.pickedSet);

  return (
    <div className={styles.wrapper}>
      <Link to="/trainer">
        <AppButton disabled={!pickedSet.length}>
          <>
            <AppIcon
              name="arrow-right"
              style={{ marginRight: 12 }}
            />
            Далее
          </>
        </AppButton>
      </Link>
    </div>
  );
}

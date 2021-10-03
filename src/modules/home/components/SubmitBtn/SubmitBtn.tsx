import React from 'react';
import arrowRightSvg from 'assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';
import AppButton from 'modules/common/components/AppButton/AppButton';
import { useSelector } from 'react-redux';
import { RootState } from 'types/RootState';
import styles from './SubmitBtn.module.css';

export default function SubmitBtn() {
  const pickedSet = useSelector((s: RootState) => s.sets.pickedSet);

  return (
    <div className={styles.wrapper}>
      <Link to="/trainer">
        <AppButton disabled={!pickedSet.length}>
          <>
            <img
              className={styles.img}
              src={arrowRightSvg}
              alt="arrow right icon"
            />
            Далее
          </>
        </AppButton>
      </Link>
    </div>
  );
}

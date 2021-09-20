import React from 'react';
import clsx from 'clsx';
import styles from 'assets/styles/components/trainer/NotePlaying.module.css';
import micSvg from 'assets/icons/mic.svg';
import AppButton from 'components/app/AppButton';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlaying } from 'store/trainerSlice';
import { RootState } from 'types/RootState';

export default function NotePlaying() {
  const playing = useSelector((state: RootState) => state.trainer.playing);
  const note = useSelector((state: RootState) => state.trainer.notePlaying);

  const classNames = clsx([
    styles.wrapper,
    playing && styles['wrapper--playing'],
    note && styles['wrapper--note']
  ]);

  const dispatch = useDispatch();
  const start = () => {
    dispatch(togglePlaying());
  };

  return (
    <div className={classNames}>
      { playing
        ?
          note
          ||
          <img
            src={micSvg}
            alt="microphone"
            className={styles.mic}
          />
        :
          <div className={styles.start}>
            <AppButton onClick={start}>Начать</AppButton>
          </div>
      }
    </div>
  );
}

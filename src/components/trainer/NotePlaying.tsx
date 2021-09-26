import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from 'assets/styles/components/trainer/NotePlaying.module.css';
import micSvg from 'assets/icons/mic.svg';
import AppButton from 'components/app/AppButton';
import { getNoteScore } from 'helpers/compareNotes';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlaying } from 'store/trainerSlice';
import { RootState } from 'types/RootState';
import { PlayingNoteScore } from 'types/PlayingNoteScore';

export default function NotePlaying() {
  const [noteScore, setNoteScore] = useState<PlayingNoteScore>('equal');
  const playing = useSelector(({ trainer }: RootState) => trainer.playing);
  const notePlaying = useSelector(({ trainer }: RootState) => trainer.notePlaying);
  const noteToPlay = useSelector(({ trainer }: RootState) => trainer.noteToPlay);

  const classNames = clsx([
    styles.wrapper,
    notePlaying && styles['wrapper--note'],
    (noteScore === 'too high') && styles['wrapper--to-high'],
    (noteScore === 'too low') && styles['wrapper--to-low'],
  ]);

  const dispatch = useDispatch();
  const start = () => { dispatch(togglePlaying()); };

  useEffect(() => {
    if (noteToPlay && notePlaying) {
      setNoteScore(getNoteScore(noteToPlay, notePlaying));
    }
  }, [noteToPlay, notePlaying]);

  const PLAYING_VIEW = (
    notePlaying
      ?
        <div>
          <div>{ notePlaying }</div>
          <div className={styles.feedback}>{ noteScore }</div>
        </div>
      :
        <img
          src={micSvg}
          alt="microphone"
          className={styles.mic}
        />
  );
  const PAUSED_VIEW = (
    <div className={styles.start}>
      <AppButton onClick={start}>Начать</AppButton>
    </div>
  );

  return (
    <div className={classNames}>
      { playing ? PLAYING_VIEW : PAUSED_VIEW }
    </div>
  );
}

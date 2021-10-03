import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wad from 'web-audio-daw';
import { RootState } from 'types/RootState';
import { getRandomNote } from 'helpers/random';
import { setNotePlaying, setNoteToPlay } from 'store/trainerSlice';
import styles from 'assets/styles/components/trainer/Trainer.module.css';
import PairOfNotes from 'components/trainer/PairOfNotes';

const voice = new Wad({ source: 'mic' });
const tuner = new (Wad as any).Poly();
tuner.setVolume(0);
tuner.add(voice);

export default function Trainer() {
  const dispatch = useDispatch();

  const goToTheNextStep = () => {
    dispatch(setNoteToPlay(getRandomNote()));
  };

  const playing = useSelector(({ trainer }: RootState) => trainer.playing);
  const playingRef = useRef(playing);
  const notePlayingUpdatedAt = useRef(Date.now());

  useEffect(() => {
    const resetTunerPitchInfo = () => {
      tuner.noteName = undefined;
      tuner.pitch = undefined;
    };

    const logPitch = () => {
      const timeFromLastNoteUpdate = Date.now() - notePlayingUpdatedAt.current;

      if (timeFromLastNoteUpdate >= 200) {
        dispatch(setNotePlaying(tuner.noteName || ''));
      }

      if (timeFromLastNoteUpdate >= 1000) {
        resetTunerPitchInfo();
      }

      if (playingRef.current) {
        requestAnimationFrame(logPitch);
      }
    };

    const startListening = async () => {
      goToTheNextStep();
      await voice.play();
      tuner.updatePitch();
      logPitch();
    };

    const stopListening = () => {
      resetTunerPitchInfo();
      voice.stop();
      tuner.stopUpdatingPitch();
    };

    playingRef.current = playing;

    if (playing) {
      startListening();
    } else {
      stopListening();
    }
  }, [playing]);

  const noteToPlay = useSelector(({ trainer }: RootState) => trainer.noteToPlay);
  const notePlaying = useSelector(({ trainer }: RootState) => trainer.notePlaying);

  useEffect(() => {
    notePlayingUpdatedAt.current = Date.now();

    if (notePlaying === noteToPlay) {
      goToTheNextStep();
    }
  }, [notePlaying, noteToPlay]);

  return (
    <div className={styles.wrapper}>
      <PairOfNotes />
    </div>
  );
}

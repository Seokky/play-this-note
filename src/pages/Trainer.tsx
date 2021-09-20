import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { togglePlaying, setNotePlaying, setNoteToPlay } from 'store/trainerSlice';
import { RootState } from 'types/RootState';
import styles from 'assets/styles/components/trainer/Trainer.module.css';
import { getRandomNote } from 'helpers/random';
import Wad from 'web-audio-daw';
import PairOfNotes from 'components/trainer/PairOfNotes';

const voice = new Wad({ source : 'mic' });
const tuner = new (Wad as any).Poly();
tuner.setVolume(0);
tuner.add(voice);

export default function Trainer() {
  const dispatch = useDispatch();

  const playing = useSelector((state: RootState) => state.trainer.playing);
  const noteToPlay = useSelector((state: RootState) => state.trainer.noteToPlay);
  const notePlaying = useSelector((state: RootState) => state.trainer.notePlaying);
  const playingRef = useRef(playing);

  const notePlayingUpdatedAt = useRef(Date.now());

  const goToTheNextStep = () => {
    dispatch(
      setNoteToPlay(getRandomNote())
    );
  };

  useEffect(() => {
    const startListening = () => {
      goToTheNextStep();
      voice.play();
      tuner.updatePitch();
      logPitch();
    };

    const stopListening = () => {
      resetTunerPitchInfo();
      voice.stop();
      tuner.stopUpdatingPitch();
    };

    const logPitch = () => {
      dispatch(setNotePlaying(tuner.noteName || ''));

      if ((Date.now() - notePlayingUpdatedAt.current) >= 500) {
        resetTunerPitchInfo();
      }

      if (playingRef.current) {
        requestAnimationFrame(logPitch);
      }
    };

    const resetTunerPitchInfo = () => {
      tuner.noteName = undefined;
      tuner.pitch = undefined;
    };

    playingRef.current = playing;

    if (playing) {
      startListening();
    } else {
      stopListening();
    }
  }, [playing]);

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
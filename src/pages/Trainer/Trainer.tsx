import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wad from 'web-audio-daw';
import { RootState } from 'types/RootState';
import { getRandomNote } from 'modules/common/helpers/random';
import { setNotePlaying, setNoteToPlay, togglePlaying } from 'store/trainer';
import styles from 'pages/Trainer/Trainer.module.css';
import PairOfNotes from 'modules/trainer/components/PairOfNotes/PairOfNotes';
import StopBtn from 'modules/trainer/components/StopButton/StopBtn';
import { useHistory } from 'react-router-dom';

const voice = new Wad({ source: 'mic' });
const tuner = new (Wad as any).Poly();
tuner.setVolume(0);
tuner.add(voice);

export default function Trainer() {
  const history = useHistory();
  const pickedSet = useSelector(({ sets }: RootState) => sets.pickedSet);
  const noteToPlay = useSelector(({ trainer }: RootState) => trainer.noteToPlay);
  const notePlaying = useSelector(({ trainer }: RootState) => trainer.notePlaying);
  const playing = useSelector(({ trainer }: RootState) => trainer.playing);
  const playingRef = useRef(playing);
  const notePlayingUpdatedAt = useRef(Date.now());
  const dispatch = useDispatch();

  const goToTheNextStep = () => {
    dispatch(setNoteToPlay(getRandomNote(pickedSet)));
  };

  useEffect(() => {
    if (!pickedSet.length) {
      history.push('/');
    }
  }, []);

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

  useEffect(() => {
    notePlayingUpdatedAt.current = Date.now();

    if (notePlaying === noteToPlay) {
      goToTheNextStep();
    }
  }, [notePlaying, noteToPlay]);

  const stop = () => {
    dispatch(togglePlaying());
  };

  return (
    <div className={styles.wrapper}>
      <PairOfNotes />

      {playing && <StopBtn onClick={stop} />}
    </div>
  );
}

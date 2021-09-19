import React, { useEffect, useRef, useState } from 'react';
import { getRandomNote } from 'helpers/random';
import Wad from 'web-audio-daw';

const voice = new Wad({ source : 'mic' });
const tuner = new (Wad as any).Poly();
tuner.setVolume(0);
tuner.add(voice);

export default function Trainer() {
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(playing);

  const [noteToPlay, setNoteToPlay] = useState('C0');
  const [notePlaying, setNotePlaying] = useState('');

  const notePlayingUpdatedAt = useRef(Date.now());

  const goToTheNextStep = () => {
    setNoteToPlay(getRandomNote());
  };

  const togglePause = () => {
    playingRef.current = !playingRef.current;
    setPlaying((prevPlaying) => !prevPlaying);
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
      setNotePlaying(tuner.noteName || '');

      if ((Date.now() - notePlayingUpdatedAt.current) >= 2000) {
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
    <div className="app-container">
      <div>note to play: { noteToPlay }</div>
      <div>note playing: { notePlaying }</div>
      <button onClick={togglePause}>
        { playing ? 'stop' : 'start' }
      </button>
    </div>
  );
}
import React, { Component } from 'react';
import Wad from 'web-audio-daw';

import { GuitarString } from 'types/GuitarString';

import styles from './NotesTabContent.module.css';

import AppButton from 'components/AppButton/AppButton';
import PairCircle from './PairCircle/PairCircle';
import Caption from './Caption/Caption';

import { STRINGS } from 'app-constants';
import { getRandomString, getRandomNote } from 'helpers/random';

const voice = new Wad({ source : 'mic' });
const tuner = new (Wad as any).Poly();
tuner.setVolume(0);
tuner.add(voice);

type State = {
  string: GuitarString;
  noteToPlay: string;
  playing: boolean;
  notePlaying: undefined | string;
}
export default class NotesTabContent extends Component<{}, State> {
  state: State = {
    string: STRINGS[0],
    noteToPlay: STRINGS[0],
    playing: false,
    notePlaying: undefined as string | undefined
  }

  render() {
    return (
      <div>
        { this.state.notePlaying } { ' ' } { this.state.noteToPlay }
        <PairCircle string={this.state.string}
                    note={this.state.noteToPlay} />

        <div className={styles.caption}>
          <Caption string={this.state.string}
                   note={this.state.noteToPlay} />
        </div>

        <div className={styles.btn}>
          <AppButton onClick={this.togglePause}>
            { this.state.playing ? 'Stop' : 'Start' }
          </AppButton>
        </div>
      </div>
    );
  }

  getRandomPair = () => {
    const string = getRandomString();

    this.setState(
      (state) => ({
        string,
        noteToPlay: getRandomNote(string)
      })
    );
  }

  togglePause = () => {
    this.setState(
      (state) => ({ playing: !state.playing }),
      () => {
        if (this.state.playing) {
          this.startListening();
        } else {
          this.stopListening();
        }
      }
    );
  }

  startListening = () => {
    this.getRandomPair();
    voice.play();
    tuner.updatePitch();
    this.logPitch();
  }

  stopListening = () => {
    voice.stop();
    tuner.stopUpdatingPitch();
  }

  logPitch = () => {
    // console.log('logPitch(): ', tuner.pitch, tuner.noteName);
    this.setState((state) => ({ notePlaying: tuner.noteName }));

    console.log(tuner.noteName, this.state.noteToPlay, tuner.noteName === this.state.noteToPlay);
    if (tuner.noteName === this.state.noteToPlay) {
      this.getRandomPair();
    }

    if (this.state.playing) requestAnimationFrame(this.logPitch);
  }
}
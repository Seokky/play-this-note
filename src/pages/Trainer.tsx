import React, { Component } from 'react';

/* types */
import { GuitarString } from 'types/GuitarString';

/* constants */
import { STRINGS } from 'app-constants';

/* helpers */
import { getRandomString, getRandomNote } from 'helpers/random';

/* libs */
import Wad from 'web-audio-daw';

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

export default class Trainer extends Component<{}, State> {
  state: State = {
    string: STRINGS[0],
    noteToPlay: STRINGS[0],
    playing: false,
    notePlaying: undefined as string | undefined
  }

  render() {
    return (
      <div className="app-container">trainer</div>
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
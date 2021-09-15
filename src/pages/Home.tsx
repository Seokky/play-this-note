import React, { Component } from 'react';
import HeroText from 'components/home/HeroText';
import ListOfNotesSets from 'components/home/ListOfNotesSets';
import SubmitBtn from 'components/home/SubmitBtn';

export default class NotesTabContent extends Component {
  render() {
    return (
      <div className="app-container">
        <HeroText />

        <ListOfNotesSets />

        <SubmitBtn />
      </div>
    );
  }
}
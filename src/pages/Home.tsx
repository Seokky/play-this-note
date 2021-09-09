import React, { Component } from 'react';
import HeroText from 'components/home/HeroText/HeroText';
import ListOfNotesSets from 'components/home/ListOfNotesSets/ListOfNotesSets';
import SubmitBtn from 'components/home/SubmitBtn/SubmitBtn';

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
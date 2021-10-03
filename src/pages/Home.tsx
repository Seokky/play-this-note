import React from 'react';
import styles from 'assets/styles/components/home/Home.module.css';
import HeroText from 'components/home/HeroText';
import CreateSetOfNotesBtn from 'components/home/CreateSetOfNotesBtn';
import ListOfNotesSets from 'components/home/ListOfNotesSets';
import FooterActions from 'components/home/FooterActions';

export default function NotesTabContent() {
  return (
    <div className={styles.wrapper}>
      <HeroText />

      <CreateSetOfNotesBtn />

      <ListOfNotesSets />

      <FooterActions />
    </div>
  );
}

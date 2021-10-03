import React from 'react';
import styles from 'pages/Home/Home.module.css';
import HeroText from 'modules/home/components/HeroText/HeroText';
import CreateSetOfNotesBtn from 'modules/home/components/CreateSetOfNotesBtn/CreateSetOfNotesBtn';
import ListOfNotesSets from 'modules/home/components/ListOfNotesSets/ListOfNotesSets';
import FooterActions from 'modules/home/components/FooterActions/FooterActions';

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

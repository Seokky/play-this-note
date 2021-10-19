import React, { useEffect, useState } from 'react';
import { NOTES } from 'modules/common/constants/notes';
import NameInput from 'modules/set-creator/components/NameInput/NameInput';
import NotesItem from 'modules/set-creator/components/NotesItem/NotesItem';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, removeNote } from 'store/setCreator';
import { RootState } from 'types/RootState';
import { MusicalNote } from 'types/MusicalNote';
import styles from './SetCreator.module.css';

export default function SetCreator() {
  const dispatch = useDispatch();
  const pickedNotes = useSelector(({ setCreator } : RootState) => setCreator.notes);

  const toggleNote = (note: MusicalNote) => {
    if (pickedNotes.includes(note)) {
      dispatch(removeNote(note));
    } else {
      dispatch(addNote(note));
    }
  };

  return (
    <div className={styles.wrapper}>
      <NameInput />

      <div className={styles.notes}>
        {
          NOTES.ALL.map((note) => (
            <NotesItem
              key={note}
              checked={pickedNotes.includes(note)}
              note={note}
              onClick={toggleNote}
            />
          ))
        }
      </div>
    </div>
  );
}

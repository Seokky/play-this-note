import React from 'react';
import { NOTES } from 'modules/common/constants/notes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/RootState';
import { MusicalNote } from 'types/MusicalNote';
import { addNote, removeNote } from 'store/setCreator';
import NotesItem from '../NotesItem/NotesItem';
import styles from './AllNotesList.module.css';

export default function AllNotesList() {
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
      <div className={styles.title}>
        Набор нот *
      </div>

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

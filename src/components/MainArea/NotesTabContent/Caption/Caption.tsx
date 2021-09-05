import React from 'react';
import micSvg from 'assets/icons/mic.svg';
import styles from './Caption.module.css';

export default function NotesTabContentCaption({ string, note }: { string: string; note: string }) {
  return (
    <div className={styles.wrapper}>
      <img src={micSvg}
           alt=""
           className={styles.mic} />

      <div className={styles.caption}>
        Pick {' '}

        <span className={styles.caption__key}>
          {note}
        </span>

        {' '} on string {' '}

        <span className={styles.caption__key}>
          {string}
        </span>
      </div>
    </div>
  );
}
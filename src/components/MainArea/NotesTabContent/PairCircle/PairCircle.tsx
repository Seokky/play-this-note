import React from 'react';

import styles from './PairCircle.module.css';

export default function PairCircle({ string, note }: { string: string; note: string }) {
  return (
    <div className={styles['string-circle']}>
      <span className={styles['string-text']}>{string}</span>

      <div className={styles['note-circle']}>
        <span className={styles['note-text']}>{note}</span>
      </div>
    </div>
  );
}

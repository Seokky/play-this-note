import React from 'react';
import styles from './FooterActions.module.css';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

export default function FooterActions() {
  return (
    <div className={styles.wrapper}>
      <SubmitBtn />
    </div>
  );
}

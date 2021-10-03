import React from 'react';
import styles from 'assets/styles/components/home/FooterActions.module.css';
import SubmitBtn from './SubmitBtn';

export default function FooterActions() {
  return (
    <div className={styles.wrapper}>
      <SubmitBtn />
    </div>
  );
}

import React from 'react';
import styles from './HeroText.module.css';

export default function HeroText() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.bold}>
        Выберите
        { ' ' }
      </span>
      набор(ы) нот для тренировки
    </div>
  );
}

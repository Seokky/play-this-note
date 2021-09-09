import React, { Component } from 'react';
import styles from './HeroText.module.css';

export default class HeroText extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.bold}>Выберите { ' ' }</span>
         набор(ы) нот для тренировки
      </div>
    );
  }
}
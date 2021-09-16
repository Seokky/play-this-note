import React, { Component } from 'react';
import styles from 'assets/styles/components/home/FooterActions.module.css';
import SubmitBtn from './SubmitBtn';

export default class FooterActions extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <SubmitBtn />
      </div>
    );
  }
}

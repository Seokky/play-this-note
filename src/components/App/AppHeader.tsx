import React from 'react';
import { Link } from 'react-router-dom';
import settingsIcon from 'assets/icons/settings.svg';
import styles from 'assets/styles/components/app/AppHeader.module.css';
import AppButton from 'components/app/AppButton';

export default function AppHeader() {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <div className={styles.logo}>Play This Note!</div>
      </Link>

      <div className={styles.settings}>
        <AppButton onClick={() => {}}
                   secondary>
          <img src={settingsIcon}
               alt="Settings" />
        </AppButton>
      </div>
    </div>
  );
}

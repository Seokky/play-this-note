import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import settingsIcon from 'assets/icons/settings.svg';
import angleDown from 'assets/icons/angle-down.svg';
import styles from 'assets/styles/components/app/AppHeader.module.css';
import AppButton from 'components/app/AppButton';

export default function AppHeader() {
  const location = useLocation();
  const history = useHistory();

  const goBackInHistory = () => {
    history.goBack();
  };

  return (
    <div className={styles.wrapper}>
      {
        (location.pathname === '/')
          ?
            <Link to="/">
              <div className={styles.logo}>Play This Note!</div>
            </Link>
          :
            <div className={styles.back}>
              <AppButton onClick={goBackInHistory} secondary>
                <img src={angleDown} alt="Back" />
              </AppButton>
            </div>
      }

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

import React from 'react';

import plusSvg from 'assets/icons/plus.svg';
import styles from 'assets/styles/components/home/CreateSetOfNotesBtn.module.css';

import { Link } from 'react-router-dom';

import AppButton from 'components/app/AppButton';

export default function CreateSetOfNotesBtn() {
  return (
    <div className={styles.wrapper}>
      <Link to="/create-own-set">
        <AppButton grow>
          <>
            <img
              className={styles.img}
              src={plusSvg}
              alt="plus icon"
            />
            Создать свой набор
          </>
        </AppButton>
      </Link>
    </div>
  );
}

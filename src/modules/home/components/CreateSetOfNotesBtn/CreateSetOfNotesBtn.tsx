import React from 'react';

import plusSvg from 'assets/icons/plus.svg';
import styles from 'modules/home/components/CreateSetOfNotesBtn/CreateSetOfNotesBtn.module.css';

import { Link } from 'react-router-dom';

import AppButton from 'modules/common/components/AppButton/AppButton';

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

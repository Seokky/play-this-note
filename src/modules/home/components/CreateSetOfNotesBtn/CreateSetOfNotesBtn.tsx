import React from 'react';
import plusSvg from 'assets/icons/plus.svg';
import { Link } from 'react-router-dom';
import AppButton from 'modules/common/components/AppButton/AppButton';
import { ROUTES } from 'modules/common/constants/routes';
import styles from './CreateSetOfNotesBtn.module.css';

export default function CreateSetOfNotesBtn() {
  return (
    <div className={styles.wrapper}>
      <Link to={ROUTES.CREATE_OWN_SET}>
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

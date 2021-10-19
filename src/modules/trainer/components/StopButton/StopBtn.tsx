import React from 'react';
import AppButton from 'modules/common/components/AppButton/AppButton';
import styles from './StopBtn.module.css';

type Props = {
  onClick: () => void;
}

const StopBtn = ({ onClick }: Props) => (
  <div className={styles.wrapper}>
    <AppButton
      secondary
      onClick={onClick}
    >
      Стоп
    </AppButton>
  </div>
);

export default StopBtn;

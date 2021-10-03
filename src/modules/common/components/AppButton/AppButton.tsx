import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import styles from './AppButton.module.css';

type Props = {
  secondary?: boolean;
  grow?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  children: JSX.Element | string;
};

const AppButton = ({
  secondary, grow, disabled, onClick, children,
}: Props) => {
  const classNames = clsx([
    styles.wrapper,
    secondary && styles['wrapper--secondary'],
    grow && styles['wrapper--grow'],
  ]);

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

AppButton.defaultProps = {
  secondary: false,
  grow: false,
  disabled: false,
  onClick: undefined,
};

export default AppButton;

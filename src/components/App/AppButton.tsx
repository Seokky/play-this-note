import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import styles from 'assets/styles/components/app/AppButton.module.css';

type Props = {
  secondary?: boolean;
  grow?: boolean;
  onClick?: MouseEventHandler;
  children: JSX.Element | string;
};

const AppButton = ({
  secondary, grow, onClick, children,
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
    >
      {children}
    </button>
  );
};

AppButton.defaultProps = {
  secondary: false,
  grow: false,
  onClick: undefined,
};

export default AppButton;

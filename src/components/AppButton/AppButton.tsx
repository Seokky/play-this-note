import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import styles from './AppButton.module.css';

type Props = {
  secondary?: boolean;
  grow?: boolean;
  onClick?: MouseEventHandler;
  children: JSX.Element | string;
};

export default function AppButton(props: Props) {
  const classNames = clsx([
    styles.wrapper,
    props.secondary && styles['wrapper--secondary'],
    props.grow && styles['wrapper--grow']
  ]);

  return (
    <button
      className={classNames}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
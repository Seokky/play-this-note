import React from 'react';
import clsx from 'clsx';
import styles from './AppTextInput.module.css';

type Props = {
  label: string;
  required?: boolean;
}

function AppTextInput({ label, required }: Props) {
  const wrapperClassNames = clsx([
    styles.wrapper,
    required && styles['wrapper--required'],
  ]);

  return (
    <label
      className={wrapperClassNames}
      htmlFor="input"
    >
      <span className={styles.label}>{ label }</span>

      <input
        className={styles.input}
        name="input"
        type="text"
      />
    </label>
  );
}

AppTextInput.defaultProps = {
  required: false,
};

export default AppTextInput;

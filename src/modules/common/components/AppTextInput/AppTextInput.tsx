import React from 'react';
import clsx from 'clsx';
import styles from './AppTextInput.module.css';

type Props = {
  label: string;
  required?: boolean;
  onInput?: (e: any) => void;
}

function AppTextInput({ label, required, onInput }: Props) {
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
        onInput={onInput}
      />
    </label>
  );
}

AppTextInput.defaultProps = {
  required: false,
  onInput: () => ({}),
};

export default AppTextInput;

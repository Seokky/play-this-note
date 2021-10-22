import React from 'react';
import AppTextInput from 'modules/common/components/AppTextInput/AppTextInput';
import { useDispatch } from 'react-redux';
import { setTitle } from 'store/setCreator';

export default function NameInput() {
  const dispatch = useDispatch();

  const onInput = (e: any) => {
    dispatch(setTitle(e.target.value));
  };

  return (
    <AppTextInput
      required
      label="Название набора нот"
      onInput={onInput}
    />
  );
}

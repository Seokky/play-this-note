import React from 'react';
import AppTextInput from 'modules/common/components/AppTextInput/AppTextInput';

export default function NameInput() {
  return (
    <AppTextInput
      required
      label="Название набора нот"
    />
  );
}

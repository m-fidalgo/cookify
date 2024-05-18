import { Checkbox as ExpoCheckbox } from 'expo-checkbox';
import * as React from 'react';

import { HUES } from 'app/constants';

import { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <ExpoCheckbox
      value={checked}
      onValueChange={onChange}
      color={checked ? HUES.aqua : HUES.lightGray}
    />
  );
};

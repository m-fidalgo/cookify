import { Checkbox } from 'expo-checkbox';
import * as React from 'react';

import { Body } from 'app/components/typography';
import { HUES } from 'app/constants';

import { CheckboxWrapper } from './styles';
import { CheckboxProps } from './types';

export const CheckboxWithLabel: React.FC<CheckboxProps> = ({ checked, label, onChange }) => {
  return (
    <CheckboxWrapper>
      <Checkbox
        value={checked}
        onValueChange={onChange}
        color={checked ? HUES.yellow : undefined}
      />
      <Body style={{ marginTop: 4 }}>{label}</Body>
    </CheckboxWrapper>
  );
};

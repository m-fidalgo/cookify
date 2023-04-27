import { KeyboardType } from 'react-native';

import { IconName } from 'app/types';

export type TextInputProps = {
  leadingIcon?: IconName;
  hideClearButton?: boolean;
  keyboardType?: KeyboardType;
  multiline?: boolean;
  placeholder?: string;
  value?: string;
  onChange: (value?: string) => void;
};

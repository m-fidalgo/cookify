import * as React from 'react';
import { Keyboard } from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';

import { Icon, IconButton } from 'app/components/common';
import { HUES } from 'app/constants';

import { StyledTextInput, TextInputContainer } from './styles';
import { TextInputProps } from './types';

export const TextInput: React.FC<TextInputProps> = ({
  leadingIcon,
  hideClearButton = false,
  keyboardType,
  multiline = false,
  placeholder,
  value,
  onChange,
}) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <OutsidePressHandler disabled={false} onOutsidePress={Keyboard.dismiss}>
      <TextInputContainer focused={focused}>
        {leadingIcon && <Icon name={leadingIcon} size="small" color="gray" />}
        <StyledTextInput
          keyboardType={keyboardType}
          multiline={multiline}
          placeholder={placeholder}
          placeholderTextColor={HUES.gray}
          onBlur={() => setFocused(false)}
          onChangeText={onChange}
          onFocus={() => setFocused(true)}
          style={{ textAlignVertical: 'top' }}
          value={value}
        />
        {value && !hideClearButton && (
          <IconButton onPress={() => onChange()} name="close" size="small" color="gray" />
        )}
      </TextInputContainer>
    </OutsidePressHandler>
  );
};

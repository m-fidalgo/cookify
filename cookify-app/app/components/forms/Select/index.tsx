import * as React from 'react';
import { MultiSelect } from 'react-native-element-dropdown';

import { Small } from 'app/components/typography';

import { TextInput } from '../TextInput';
import { InputContainer, ItemContainer, SelectContainer, selectStyles } from './styles';
import { SelectProps } from './types';

export const Select: React.FC<SelectProps> = ({
  items,
  value,
  placeholder,
  searchPlaceholder,
  onChange,
}) => {
  const [focused, setFocused] = React.useState(false);

  const getPlaceholder = () => {
    if (!value?.length) return placeholder;

    return items
      .filter((item) => value.includes(item.value))
      .map((item) => item.label)
      .join(', ');
  };

  return (
    <SelectContainer focused={focused}>
      <MultiSelect
        search={!!searchPlaceholder}
        visibleSelectedItem={false}
        data={items}
        labelField="label"
        valueField="value"
        searchField="label"
        value={value}
        onChange={onChange}
        placeholder={getPlaceholder()}
        style={selectStyles.input}
        placeholderStyle={selectStyles.placeholder}
        containerStyle={selectStyles.container}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        renderItem={(item: { label: string; value: string }, selected?: boolean) => {
          return (
            <ItemContainer>
              <Small color={selected ? 'gray' : 'black'}>{item.label}</Small>
            </ItemContainer>
          );
        }}
        renderInputSearch={(onSearch: (value: string) => void) => {
          return (
            <InputContainer>
              <TextInput
                placeholder={searchPlaceholder}
                onChange={(value?: string) => onSearch(value || '')}
              />
            </InputContainer>
          );
        }}
      />
    </SelectContainer>
  );
};

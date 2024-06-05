import * as React from 'react';
import { FC, useState } from 'react';

import { Button, Chip, Icon, IconButton } from 'app/components/common';

import { TextInput } from '../TextInput';
import { ChipsContainer, Container, InputContainer } from './styles';
import { TagInputProps } from './types';

export const TagInput: FC<TagInputProps> = ({ onChangeTags, tags }) => {
  const [value, setValue] = useState<string | undefined>();

  const handleRemoveTag = (tag: string) => {
    const filteredTags = tags.filter((t) => t !== tag);
    onChangeTags(filteredTags);
  };

  const handleAddTag = (tag?: string) => {
    if (!tag) return;
    const newTags = [...tags, tag];
    onChangeTags(newTags);
    setValue(undefined);
  };

  return (
    <Container>
      <ChipsContainer>
        {tags.map((tag, index) => {
          return (
            <Chip key={index} text={tag} color="lightBlue" onRemove={() => handleRemoveTag(tag)} />
          );
        })}
      </ChipsContainer>
      <InputContainer>
        <TextInput
          value={value}
          onChange={(newValue) => setValue(newValue)}
          onSubmit={() => handleAddTag(value)}
        />
        <IconButton
          color="yellow"
          onPress={() => handleAddTag(value)}
          disabled={!value}
          name="add"
        />
      </InputContainer>
    </Container>
  );
};

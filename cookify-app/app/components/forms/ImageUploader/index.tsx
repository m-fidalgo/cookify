import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';

import { Icon } from 'app/components/common';

import { Image, ImageUploaderContainer } from './styles';
import { ImageUploaderProps } from './types';

export const ImageUploader: React.FC<ImageUploaderProps> = ({ imageUri, onChange }) => {
  const chooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 1 });
    if (!result.canceled) onChange(result.assets[0].uri);
  };

  const handleOnPress = () => {
    if (!imageUri) chooseImage();
  };

  return (
    <ImageUploaderContainer onPress={handleOnPress}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} />
      ) : (
        <Icon name="photo-library" color="aqua" size="large" />
      )}
    </ImageUploaderContainer>
  );
};

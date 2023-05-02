import * as ImagePicker from 'expo-image-picker';
import * as React from 'react';

import { Icon } from 'app/components/common';

import { IconContainer, Image, ImageUploaderContainer } from './styles';
import { ImageUploaderProps } from './types';

export const ImageUploader: React.FC<ImageUploaderProps> = ({ imageUri, onChange }) => {
  const chooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 1 });
    console.log(result);
    if (!result.canceled) onChange(result.assets[0].uri);
  };

  const handleOnPress = () => {
    imageUri ? onChange() : chooseImage();
  };

  return (
    <ImageUploaderContainer onPress={handleOnPress}>
      {imageUri ? (
        <>
          <IconContainer>
            <Icon name="close" color="aqua" size="small" />
          </IconContainer>
          <Image source={{ uri: imageUri }} />
        </>
      ) : (
        <Icon name="photo-library" color="aqua" size="large" />
      )}
    </ImageUploaderContainer>
  );
};

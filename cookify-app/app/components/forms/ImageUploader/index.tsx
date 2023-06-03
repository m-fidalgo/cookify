import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';

import { Icon } from 'app/components/common';

import { IconContainer, Image, ImageUploaderContainer } from './styles';
import { ImageUploaderProps } from './types';

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  imageUri,
  onChange,
  sizeInPx = 150,
}) => {
  const chooseImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 1 });
    if (!result.canceled) {
      const resized = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 500 } }],
        { compress: 0.7 }
      );
      onChange(resized.uri);
    }
  };

  const handleOnPress = () => {
    imageUri ? onChange() : chooseImage();
  };

  return (
    <ImageUploaderContainer sizeInPx={sizeInPx} onPress={handleOnPress}>
      {imageUri ? (
        <>
          <IconContainer>
            <Icon name="close" color="aqua" size="small" />
          </IconContainer>
          <Image sizeInPx={sizeInPx} source={{ uri: imageUri }} />
        </>
      ) : (
        <Icon name="photo-library" color="aqua" size="large" />
      )}
    </ImageUploaderContainer>
  );
};

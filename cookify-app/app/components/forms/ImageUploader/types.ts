import { ImageUploaderStyleProps } from './styles';

export type ImageUploaderProps = {
  imageUri?: string;
  onChange: (imageUri?: string) => void;
} & Partial<ImageUploaderStyleProps>;

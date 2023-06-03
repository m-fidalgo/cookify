import { request } from 'app/services/config';
import { Image } from 'app/types';

import { IMAGES_ENDPOINT } from '../config';

export const addImage = async (formData: FormData) => {
  return (await request({
    path: IMAGES_ENDPOINT,
    method: 'post',
    data: formData,
  })) as Image;
};

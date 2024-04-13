import { request } from "app/services/config";
import { Image } from 'app/types';
import { buildEndpoint } from 'app/utils';

import { RECIPE_IMAGE_ENDPOINT } from "../config";

export const uploadImage = async (id: number, formData: FormData) => {
  return (await request({
    path: buildEndpoint(RECIPE_IMAGE_ENDPOINT, id.toString()),
    method: 'post',
    data: formData,
  })) as Image;
};

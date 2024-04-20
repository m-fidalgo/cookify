import { User } from './user';

export type Rating = {
  id: number;
  text: string;
  rating: number;
  user: User;
};

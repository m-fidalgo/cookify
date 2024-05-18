import { User } from 'app/types';

export type UserParams = Omit<User, 'id'> & {
  password?: string;
};

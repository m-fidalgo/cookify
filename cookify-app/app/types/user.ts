export type User = {
  id: number;
  name: string;
  email: string;
  vegetarian?: boolean;
  vegan?: boolean;
  lactoseIntolerant?: boolean;
  celiac?: boolean;
};

export type AuthUser = User & {
  token: string;
};

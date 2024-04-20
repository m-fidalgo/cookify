export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthUser = User & {
  token: string;
};

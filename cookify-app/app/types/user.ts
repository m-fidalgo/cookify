export type User = {
  id: number;
  name: string;
};

export type AuthUser = User & {
  access?: string;
  refresh?: string;
};

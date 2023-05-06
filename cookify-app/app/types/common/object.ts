export type ObjectType<T extends string> = {
  [key in T]: string | number;
};

export type IdentifiableObject = {
  id: number;
};

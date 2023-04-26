export type ObjectType<T extends string> = {
  [key in T]: string | number;
};

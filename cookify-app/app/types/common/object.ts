export type ObjectType<T extends string> = {
  [key in T]: string | number;
};

export type IdentifiableObject = {
  id: number;
};

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export const buildEndpoint = (url: string, ...args: string[]) => {
  args.forEach((arg) => {
    url = url.replace(':id', arg);
  });
  return url;
};

export const formatParams = (
  paramsObject: { [key: string]: string | number | boolean | undefined | number[] | string[] } = {}
) => {
  const query = Object.keys(paramsObject)
    .map((key) => {
      const value = paramsObject[key];
      if (Array.isArray(value)) {
        let arrayValue = '';
        arrayValue += value
          .map((val) => {
            return `${encodeURIComponent(key)}[]=${encodeURIComponent(val)}`;
          })
          .join('&');
        return arrayValue;
      } else {
        return value === undefined ? '' : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
    })
    .join('&');

  return query ? `?${query}` : '';
};

export const filterObjectWithFilter = <T extends Record<string, any>>(object: T, filter: string[]): Partial<T> => {
  const cloneObject = { ...object };

  Object.keys(object).forEach((key) => {
    if (!filter.includes(key)) {
      delete cloneObject[key];
    }
  });

  return { ...cloneObject };
};

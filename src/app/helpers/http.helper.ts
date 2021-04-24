export const inputToParamsConverter = (input: Record<string, string | number | string[]>): Record<string, string> => {
  let fields: Record<string, string> = {};

  Object.keys(input).forEach((key) => {
    switch (typeof input[key]) {
      case 'string':
        fields[key] = input[key] as string;
        break;

      case 'number':
        fields[key] = input[key].toString();
        break;

      default:
        fields[key] = (input[key] as string[]).join(',');
        break;
    }
  });

  return fields;
};

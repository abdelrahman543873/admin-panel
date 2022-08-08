export const lowerCaseTransformer = {
  to: (value: string | null) => {
    return value ? value.toLowerCase().trim() : value;
  },
  from: (value: string) => value,
};

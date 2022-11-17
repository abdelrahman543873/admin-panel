export const dateMapper = (data: { createdAt: string }): any => {
  data.createdAt = new Date(data.createdAt).toLocaleString();
  return data;
};

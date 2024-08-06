export const baseImagePath = (size: string, path: string): string => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

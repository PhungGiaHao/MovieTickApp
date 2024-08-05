export const baseImagePath = (size: number, path: string): string => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

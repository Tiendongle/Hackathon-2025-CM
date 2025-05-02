// Return true is array is empty
export const isEmpty = (array: unknown[]) =>
  !Array.isArray(array) || !array.length;

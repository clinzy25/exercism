export const isPangram = (str) => {
  const index = 'abcdefghijklmnopqrstuvqxyz'.split('');
  return index.every((char) => str.toLowerCase().includes(char));
};

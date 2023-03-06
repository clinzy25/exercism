export const compute = (parent, daughter) => {
  if (!parent.length && daughter.length)
    throw new Error('left strand must not be empty');
  if (parent.length && !daughter.length)
    throw new Error('right strand must not be empty');
  if (parent.length != daughter.length) 
    throw new Error('left and right strands must be of equal length');
  return [...parent].reduce((hammingDistance, nucleotide, i) =>
    hammingDistance + (nucleotide !== daughter[i]), 0);
};

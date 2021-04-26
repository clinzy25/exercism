export const countWords = (str) => {
  const wordCount = {};
  str
    .toLowerCase()
    .match(/\w+('\w+)?/g)
    .map((word) => {
      wordCount[word] ? wordCount[word]++ : (wordCount[word] = 1);
    });
  return wordCount;
};

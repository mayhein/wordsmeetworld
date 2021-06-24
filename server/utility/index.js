// Character Count
const countCharacters = (str) => str.length;

const isBlankString = (str) => str.trim().length == 0;

const getWords = (str) => {
  return str
    .split(" ")
    .map((substr) => substr.trim())
    .filter((substr) => substr.length > 0);
};

// Word Count
const countWords = (str) => getWords(str).length;

// Sentence Count
const countSentences = (str) => {
  return str.match(/.*?[?!.]/g).length;
};

// Paragraph Count
const countParagraphs = (str) => {
  return str.split("\n").filter((substr) => !isBlankString(substr)).length;
};

// Unique Bigrams
const countUniqueBigrams = (str) => {
  const words = getWords(str);
  let bigrams = new Set();
  for (let i = 0; i + 1 < words.length; i++) {
    bigrams.add(words[i] + words[i + 1]);
  }
  return bigrams.size;
};

module.exports = {
  countCharacters,
  countWords,
  countSentences,
  countParagraphs,
  countUniqueBigrams,
};

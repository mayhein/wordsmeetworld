// Character Count
const characterCount = (text) => {
  let count = 0;
  for (let char in text) {
    if (text[char] !== ' ') {
      count++;
    }
  }
  return count;
}

module.exports = {
  characterCount
};



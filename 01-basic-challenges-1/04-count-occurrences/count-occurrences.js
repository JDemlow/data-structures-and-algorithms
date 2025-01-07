// Use loop

function countOccurrences(str, char) {
  let count = 0;

  for (i = 1; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// Use one line solution

// function countOccurrences() {}

module.exports = countOccurrences;

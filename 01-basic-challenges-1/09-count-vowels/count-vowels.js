function countVowels(str) {
  const formatted = str.toLowerCase();
  let result = 0;

  for (let i = 0; i < formatted.length; i++) {
    if (
      formatted[i] === "a" ||
      formatted[i] === "e" ||
      formatted[i] === "i" ||
      formatted[i] === "o" ||
      formatted[i] === "u"
    )
      result++;
  }
  return result;
}

module.exports = countVowels;

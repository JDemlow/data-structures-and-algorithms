function findMaxNumber(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[sorted.length - 1];
}

module.exports = findMaxNumber;

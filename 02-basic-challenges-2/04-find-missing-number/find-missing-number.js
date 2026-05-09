function findMissingNumber(arr) {
  const n = arr.length + 1;

  const expectedTotal = (n * (n + 1)) / 2;

  const actualTotal = arr.reduce((a, b) => a + b, 0);

  return expectedTotal - actualTotal;
}

module.exports = findMissingNumber;

// both solutions

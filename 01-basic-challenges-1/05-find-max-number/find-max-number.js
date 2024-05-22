// Practice both solutions

function findMaxNumber(arr) {
  let max = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = findMaxNumber;

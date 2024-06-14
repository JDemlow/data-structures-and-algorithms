// Practice both solutions

function findMaxNumber(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

module.exports = findMaxNumber;

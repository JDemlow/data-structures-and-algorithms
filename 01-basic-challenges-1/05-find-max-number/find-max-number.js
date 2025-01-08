// Built in method

// function findMaxNumber() {}

// for loop

function findMaxNumber(arr) {
  let maxNum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

module.exports = findMaxNumber;

function removeDuplicates(arr) {
  let finalArr = [];
  let sortedArr = arr.sort();
  for (i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      finalArr.push(sortedArr[i]);
    }
  }
  return finalArr;
}

module.exports = removeDuplicates;

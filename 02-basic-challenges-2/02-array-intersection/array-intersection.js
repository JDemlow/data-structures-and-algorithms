function arrayIntersection(arr1, arr2) {
  let result = [];
  let set1 = new Set(arr1);

  for (let num of arr2) {
    if (set1.has(num)) {
      result.push(num);
    }
  }
  return result;
}

module.exports = arrayIntersection;

// both solutions

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  let result = [];

  for (let num of arr2) {
    if (set1.has(num)) result.push(num);
  }
  return result;
}

module.exports = arrayIntersection;

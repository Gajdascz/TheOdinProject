// Splits input array into two halves.
// returns { lhs, rhs }
const split = (arr) => {
  const _lhs = arr.slice(0, Math.floor(arr.length / 2));
  const _rhs = arr.slice(_lhs.length, arr.length);
  return { lhs: _lhs, rhs: _rhs };
};

// Compares and merges lhs and rhs of a split array.
// returns sortedSubArr
const merge = (lhs, rhs) => {
  let sortedSubArr = [];
  let i = 0;
  let j = 0;
  while (i < lhs.length && j < rhs.length) {
    if (lhs[i] > rhs[j]) {
      sortedSubArr.push(rhs[j]);
      j++;
    } else if (lhs[i] < rhs[j]) {
      sortedSubArr.push(lhs[i]);
      i++;
    } else if (lhs[i] === rhs[j]) {
      sortedSubArr.push(lhs[i], rhs[j]);
      i++;
      j++;
    }
  }
  if (sortedSubArr.length !== lhs.length + rhs.length) {
    if (i === lhs.length && j !== rhs.length) sortedSubArr.push(...rhs.slice(j, rhs.length));
    if (i !== lhs.length && j === rhs.length) sortedSubArr.push(...lhs.slice(i, lhs.length));
  }
  return sortedSubArr;
};

// Recursively splits, sorts, and merges input array.
// returns a new sorted array.
function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  const splitArr = split(arr);
  const sortedLHS = mergeSort(splitArr.lhs);
  const sortedRHS = mergeSort(splitArr.rhs);
  return merge(sortedLHS, sortedRHS);
}

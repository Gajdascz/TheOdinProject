// Checks input and reduces redundant recursive base case checks
const noFurtherCalculationNecessary = (num) => {
  if (num === 0) return [];
  else if (num === 1) return [0];
  else if (num === 2) return [0, 1];
  else return false;
};

// My original non-traditional implementation.
const recursiveFibonacciA = (num, arr, i) => {
  if (arr.length === num) return arr;
  arr.push(arr[i] + arr[i + 1]);
  return recursiveFibonacciA(num, arr, i + 1);
};
// RecursiveFibonacciA helper
const recursiveFibonacciAA = (num) =>
  noFurtherCalculationNecessary(num) || recursiveFibonacciA(num, [0, 1], 0);

// More traditional implementation.
const recursiveFibonacciB = (num) => {
  const buildFib = (arr, count) => {
    if (count === num) return arr;
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return buildFib(arr, count + 1);
  };
  return noFurtherCalculationNecessary(num) || buildFib([0, 1], 2);
};

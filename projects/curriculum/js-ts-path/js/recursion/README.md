# Recursive Fibonacci and Merge Sort
This repository contains recursive implementations of Merge Sort and Fibonacci Sequence generation algorithms, completed as part of The Odin Project's Node.js JavaScript curriculum. The project provides an introduction to recursion as it applies to computer science
<br/><br/>Project Page: [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion)


## Learning Outcomes
Through this project, I have gained a deeper understanding of recursion, including:
- Determining when recursion is a more effective approach compared to iteration.
- Understanding the structure of a recursive function, including the recursive step and base case.
- Comprehending how return values are unwound from recursive calls once a base case is reached.
- Learning how the call stack manages the context and values of recursive function executions.
- Applying recursion in the Fibonacci sequence using two different approaches.
- Applying recursion in the merge sort algorithm, showcasing the divide and conquer methodology.

## mergeSort.js
mergeSort.js implements the merge sort algorithm, a highly efficient, stable, and comparison-based sorting algorithm. This file contains three main functions:
- `split(arr)`: Splits an input array into two halves and returns an object containing the left half (lhs) and right half (rhs) of the array.
- `merge(lhs, rhs)`: Merges and compares elements of two subarrays, both equal or unequal length (lhs and rhs), into a single sorted array.
- `mergeSort(arr)`: Primary function that recursively splits the input array, sorts each half, merges them back together, and returns a new sorted array.

## fib.js
fib.js includes different implementations of the Fibonacci sequence generator:
- `noFurtherCalculationNecessary(num)`: Checks if further calculation is needed for a given number, optimizing base case checks.
- `recursiveFibonacciA(num, arr, i)`: An unconventional Fibonacci generator using parameters to maintain sequence state across recursive calls.
- `recursiveFibonacciAA(num)`: Simplifies `recursiveFibonacciA`'s call interface by requiring only the sequence length.
- `recursiveFibonacciB(num)`: A traditional Fibonacci generator using an internal function `buildFib` with the standard formula.

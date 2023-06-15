/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  // Base case: if the array has only one element, return it as a single permutation
  if (array.length === 1) {
    return [array];
  }

  // Array to store all permutations
  const result = [];

  // Iterate over each element in the array
  for (let i = 0; i < array.length; i++) {
    // Extract the current element
    const current = array[i];

    // Generate all permutations of the remaining elements (excluding the current element)
    const remaining = [...array.slice(0, i), ...array.slice(i + 1)];
    const innerPermutations = permutations(remaining);

    // Append the current element to each permutation of the remaining elements
    for (let j = 0; j < innerPermutations.length; j++) {
      result.push([current, ...innerPermutations[j]]);
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}

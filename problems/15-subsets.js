/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

function subsets(arr) {
  const subsets = [];
  //helper function
  function generateSubsets(index, currentSubset) {
    //base case
    if (index === arr.length) {
      subsets.push(currentSubset);
      return;
    }
    // step cases
    generateSubsets(index + 1, currentSubset);
    generateSubsets(index + 1, currentSubset.concat(arr[index]));
  }
  //recursive function call startin by 0 and empty array
  generateSubsets(0, []);
  //return full subsets
  return subsets;
}
subsets([1, 2, 3])
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}

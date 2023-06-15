/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/


function flatten(arr) {
  let flattened = [];
  //loop over arrays in array
  for (let i = 0; i < arr.length; i++) {
    //if it is an array
    if (Array.isArray(arr[i])) {
      //create new array concatening the las array in an array
      flattened = flattened.concat(flatten(arr[i]));
    } else {
      // if is not an array push value into new arr.
      flattened.push(arr[i]);
    }
  }

  return flattened;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}

/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
let addToTwelve = (arr) => {
  if(arr.length === 0) { // base case
    return false;
  }
  let last = arr[arr.length - 1]; //get last index
  let penultimate = arr[arr.length -2]; // get penultimate index
  if((last + penultimate) === 12) { //compare
    return true;
  } else {
    return addToTwelve(arr.slice(0, arr.length-1)); //call recursive function on remaining array
  };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}

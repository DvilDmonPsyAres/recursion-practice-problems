/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/
let range = (start, end) => {
  //base case
  if(start === end) {
    return [];
  }
  if(start > end) {
    return []
  }
  let newArr = range(start, end-1)
  newArr.push(end-1);
  //step case
  return newArr;
}

// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}

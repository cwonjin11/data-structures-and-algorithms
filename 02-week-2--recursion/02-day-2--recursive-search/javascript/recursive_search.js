/*
  given an array, find the target value. 
  if found, return true, otherwise, return false
 */

const recursiveCount = require("../../01-day-1--recursive-counting/javascript/recursive_count")

// const recursiveCount = require("../../01-day-1--recursive-counting/javascript/recursive_count");

  /* 
  input [1,2,3], 2
  output true 

  input [1,2,3,4], 5
  output false 
  */

  /*
  for loop : iterate each element, 
    if arr[i] == target value
    return true

    else return false
  */

function recursiveSearch(arr, target) {

  // for(let i=0; i<arr.length; i++){
  //   if(arr[i] === target){
  //     return true
  //   }
  // }
  // return false

  if (arr.length === 0) {
    return false
  }

  if (arr[0] === target){
    return true
  }

  return recursiveSearch(arr.slice(1), target)
}

console.log(recursiveSearch([1,2,3], 2))
console.log(recursiveSearch([1,2,3,4], 5))
























// function recursiveSearch(arr, target) {
//   // type your code here

//   if (arr.includes(target)) {
//     return true
//   } 
//   if (arr.length === 0 || !arr.includes(target)) {
//     return false
//   } 

//   return recursiveSearch(arr, target)
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution

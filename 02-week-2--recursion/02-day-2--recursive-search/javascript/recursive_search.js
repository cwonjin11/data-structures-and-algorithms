function recursiveSearch(arr, target) {
  // type your code here

  if (arr.includes(target)) {
    return true
  } 
  if (arr.length === 0 || !arr.includes(target)) {
    return false
  } 

  return recursiveSearch(arr, target)
}

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

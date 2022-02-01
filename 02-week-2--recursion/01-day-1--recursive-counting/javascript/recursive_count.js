function recursiveCount(num =0 ) {
  // type your code here
//base case
if (num >=10) {
  // console.log(return);
  return 
}
//Pass arguments into the function that immediately trigger the base case
console.log(num)
//Pass the next arguments that trigger the recursive call just once
recursiveCount(++num)
// console.log(num)
}
// recursiveCount(num = 10)
if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

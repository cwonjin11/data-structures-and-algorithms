function recursiveCount(num = 0) {
  // type your code here
//base case
if (num >=10) {
  return;
}
//Pass arguments into the function that immediately trigger the base case
console.log(num)
//Pass the next arguments that trigger the recursive call just once
recursiveCount(num + 1)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

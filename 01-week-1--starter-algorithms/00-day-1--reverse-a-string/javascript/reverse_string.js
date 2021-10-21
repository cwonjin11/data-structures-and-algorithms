function reverseString(str) {
  // type your code here
  
  //***********************************************************/
  // initialize a variable called reversed with an empty string
  let reversed = '';
  // iterate backward through the input string
  // for(i = str.length - 1; i > -1; --i) {
  for(let i = str.length - 1; i >=0; i--) {
    console.log(str, "<===")
  // set reversed to reversed + current character
    reversed = reversed + str[i];
  }
  // return reversed
  return reversed;

}
console.log("=>", reverseString("abcd"));
  //***********************************************************/



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

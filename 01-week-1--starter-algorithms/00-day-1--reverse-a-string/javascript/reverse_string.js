// function reverseString(str) {
//   // type your code here
  
//   //***********************************************************/
//   // initialize a variable called reversed with an empty string
//   let reversed = '';
//   // iterate backward through the input string
//   // for(i = str.length - 1; i > -1; --i) {
//   for(let i = str.length - 1; i >=0; i--) {
//     // console.log(str, "<===")
//     // console.log(str.length)
//     // console.log(str[3])
//     // console.log(str[2])
//     // console.log(str[1])
//     // console.log(str[0])
//   // set reversed to reversed + current character
//     reversed = reversed + str[i];
//   }
//   // return reversed
//   return reversed;

// }
// console.log("=>", reverseString("abcd"));
  //***********************************************************/

  // question : 
    //reverse a string. Your method receives an argument, string, and output that string with its letters in reverse order
    //'abc' => 'cba', '123' => '321', 'aaa=>aaa'
    //pseudocode
  const reverseString = (str) => {

    let output = ""

      for(let i = str.length-1; i > -1  ; --i){
        // keep adding str[i] to output
        output += str[i]
      }

    return output
  }

  console.log(reverseString('123'))


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

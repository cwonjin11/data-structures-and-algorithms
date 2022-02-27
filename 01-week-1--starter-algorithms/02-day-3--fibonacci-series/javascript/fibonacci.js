//find the nth fibonacci number

//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// 0  1  2  3  4  5  6  7   8   9   10

// create a variable lastTwo as an empty array with two values
// loop input 
// create a variable sum equals to 
// 


// iterate fibonacci array
// return nth number

function fibonacci(num) {

  //edge case : if num is less than two, return num
  if (num < 2) {
    return num
  }

  // initialize a variable lastTwo with 0,1 for the last two numbers.
  let lastTwo = [0, 1]

  // loop 
    //variable sum = lastTwo[0] plus lastTwo[1]
    // reassign values of lastTwo[0] as lastTwo[1] and lastTwo[1] as sum
  //return lastTwo[1]
  for(let i=0; i<num-1; i++){
    const sum = lastTwo[0] + lastTwo[1]
    lastTwo = [lastTwo[1], sum]
  }
  return lastTwo[1]

}

fibonacci(3)  //=> 2























// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   }

//   let lastTwo = [0, 1];

//   for (let i = 0; i < num - 1; ++i) {
//     const sum = lastTwo[0] + lastTwo[1];
//     console.log(sum)
//     lastTwo = [lastTwo[1], sum];
//   }

//   return lastTwo[1];
// }
// console.log(fibonacci(1))

//fibonacci sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//                    0  1  2  3  4  5  6  7    8   9  10


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

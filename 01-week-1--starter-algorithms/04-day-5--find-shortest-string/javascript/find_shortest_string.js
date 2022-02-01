// function findShortestString(arr) {

//   let shortest = arr[0]
  
//   arr.forEach(string => {
//     if(string.length < shortest.length){
//       shortest = string
//     }
//   })
//   return shortest
// }


function findShortestString(arr) {

  // let shortest = arr[0]

  //   for(let i=0; i<arr.length; i++){
  //     // if(arr[i].length < shortest.length){
  //     //   shortest = arr[i]
  //       arr[i].length < shortest.length ? shortest = arr[i] : shortest 
  //     // }
  //   }
  // return shortest

  return arr.reduce((shortest, currentString) => 
  currentString.length < shortest.length ? currentString : shortest);
  
}

console.log(findShortestString(['flower', 'juniper', '', 'lily', 'dadelion']))





















// function findShortestString(arr) {
//   let shortestString = arr[0]
//   // type your code here

//   arr.forEach(string => {
//     if (string.length < shortestString.length) {
//       shortestString = string;
//     }
//   });
//   return shortestString;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

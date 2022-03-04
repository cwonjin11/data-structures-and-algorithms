

// const findFirstDuplicate = (arr) => {
//     const result = []
//       for (let i=0; i < arr.length; i++){
//         if(result.includes(arr[i])){
//           return arr[i]
//         } else {
//         result.push(arr[i])}
//       }
//     return -1
// }
// console.log(findFirstDuplicate([2, 1, 3, 2, 3]))

/*
Problem : Find first duplicate value from a given array
  if no duplicates => return -1

  pseudocode
  A Set is a data structure that contains only an unique values/objects
  If I check a value is in a Set, I will know if there is a duplicate
  If there is a duplicate, I will return in right away, otherwise return -1 if no dupe
*/

// const findFirstDuplicate = (arr) => {
//   const uniq = new Set()
//     for (let i=0; i<arr.length; i++){
//       if(uniq.has(arr[i])){
//         return arr[i]
//       } else {
//         uniq.add(arr[i])
//       }
//     }
//   return -1
// }
// console.log(findFirstDuplicate([2, 1, 3, 2, 3]))



//using new Set
// const findFirstDuplicate = (arr) => {

//   let uniq = new Set()

//   for(const num of arr){
//     if(uniq.has(num)){
//       return num
//     } else {
//       uniq.add(num)
//       console.log(uniq)
//     }
//   }
// }
// console.log(findFirstDuplicate([2, 1, 3, 3, 2]))


//using array method
const findFirstDuplicate = (arr) => {

  let output = []

  for(let i = 0; i < arr.length; i++){
    if(output.includes(arr[i])){
      return arr[i]
    } else {
      output.push(arr[i])
    }
  }
  return -1

}







// const findFirstDuplicate = (arr) => {
//   const uniq = new Set()
//     for (const value of arr){
//       if(uniq.has(value)){
//        return value
//       } 
//       uniq.add(value)
//     }
//   return -1
// }











// function findFirstDuplicate(arr) {
//   // initilize an empty set called uniques
//   const uniques = new Set()
//   //iterate through the input arr
//     for (const value of arr) {
//       // if the value is in uniques, return the value
//       if (uniques.has(value)) {
//         return value;
//       }
//       // else add value to the set
//       uniques.add(value)
//     }

//     // return -1 if no duplicate found during iteration
//     return -1;
// }



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

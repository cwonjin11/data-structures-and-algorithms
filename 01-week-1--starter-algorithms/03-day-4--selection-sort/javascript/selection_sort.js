
// function selectionSort(arr) {

 
//   let sorted = []
//   let len = arr.length // must declare a variable for length of arr because we are using splice at the and that 
//   console.log(len)
//   for(let i = 0; i < len; i++){
//     let min = Math.min(...arr)
//     sorted.push(min)
//     let index = arr.indexOf(min)
//     arr.splice(index, 1)
//   }
//   return sorted
  
// }


function selectionSort(arr) {


  let output = []

  while(arr.length > 0){
    let min = Math.min(...arr)
    output.push(min)
    let index = arr.indexOf(min)
    arr.splice(index, 1)
  }

  return output


}


//   let sa = [];
//   let len = a.length;
//  for(let i=0;i<len;i++) {
//    sa.push(Math.min(...a));
//     a.splice(a.indexOf(Math.min(...a)), 1)
//  }
 
// console.log(selectionSort([1]))


// function selectionSort(arr) {

//   let sorted = []
//   // for (let i = 0; i < arr.length; i++){
//   while (arr.length > 0) {
//     let min = Math.min(...arr)
//     let index = arr.indexOf(min)
//     sorted.push(min)
//     arr.splice(index, 1)
//   }
//   return sorted

// }





















// function selectionSort(arr) {
//   // type your code here
//   const sortedArray = [];

//   while (arr.length > 0) {
//     const min = Math.min(...arr)
//     // console.log(min)
//     const index = arr.indexOf(min)
//     // console.log("index==>",index)
//     // console.log(arr)
//     sortedArray.push(min);
//     arr.splice(index,1);
//   }
//   return sortedArray;

// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 4, 5]");
  console.log("=>", selectionSort([3, -1, 5, 4, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

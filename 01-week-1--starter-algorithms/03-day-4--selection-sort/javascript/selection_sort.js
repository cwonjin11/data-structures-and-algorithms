function selectionSort(arr) {
  // type your code here
  const sortedArray = [];

  while (arr.length > 0) {
    const min = Math.min(...arr)
    // console.log(min)
    const index = arr.indexOf(min)
    // console.log("index==>",index)
    // console.log(arr)
    sortedArray.push(min);
    arr.splice(index,1);
  }
  return sortedArray;

}

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

function findFirstDuplicate(arr) {
  // initilize an empty set called uniques
  const uniques = new Set()
  //iterate through the input arr
    for (const value of arr) {
      // if the value is in uniques, return the value
      if (uniques.has(value)) {
        return value;
      }
      // else add value to the set
      uniques.add(value)
    }

    // return -1 if no duplicate found during iteration
    return -1;
}



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

// Write a function that takes an array of strings as an argument
// and returns a sorted array containing the same strings, ordered from shortest to longest.

// Before:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// After:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]

function sortByLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1].length < arr[j].length) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

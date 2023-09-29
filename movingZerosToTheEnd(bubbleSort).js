// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

function moveZeros(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j - 1] === 0) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

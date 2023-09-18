const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      found = true;
      position = middle;
      return position;
    }
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(arr, 15));
console.log(count);

// O(log2n)

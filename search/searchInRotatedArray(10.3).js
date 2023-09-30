// Search in Rotated Array: Given a sorted array of n integers that has been rotated an unknown
// number of times, write code to find an element in the array. You may assume that the array was
// originally sorted in increasing order.
// EXAMPLE
// Input: find 5 in (15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14}
// Output: 8 (the index of 5 in the array)

let arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

function findTheElement(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  let found = false;
  let position = -1;

  let counter = 0;

  while (found === false) {
    middle = Math.floor((start + end) / 2);
    counter += 1;
    // console.log(start, middle, end);
    if (arr[middle] === element) {
      found = true;
      position = middle;
      return position;
    } else if (element === arr[start]) {
      return start;
    } else if (element === arr[end]) {
      return end;
    } else if (element < arr[middle] && element > arr[start]) {
      // console.log("a");
      end = middle - 1;
    } else if (element > arr[middle] && arr[start] < arr[middle]) {
      // console.log("b");
      start = middle + 1;
    } else if (element < arr[start] && arr[start] < arr[middle]) {
      // console.log("c");
      start = middle + 1;
    } else if (element > arr[middle] && element < arr[end]) {
      // console.log("d");
      start = middle + 1;
    } else if (element < arr[middle] && arr[start] > arr[middle]) {
      // console.log("e");
      end = middle - 1;
    } else if (element > arr[start] && arr[start] > arr[middle]) {
      // console.log("f");
      end = middle - 1;
    } else if (counter > arr.length) {
      return position;
    }
  }
}

console.log("result=>", findTheElement(arr, 15)); // 0
console.log("result=>", findTheElement(arr, 16)); // 1
console.log("result=>", findTheElement(arr, 19)); // 2
console.log("result=>", findTheElement(arr, 20)); // 3
console.log("result=>", findTheElement(arr, 25)); // 4
console.log("result=>", findTheElement(arr, 1)); // 5
console.log("result=>", findTheElement(arr, 3)); // 6
console.log("result=>", findTheElement(arr, 4)); // 7
console.log("result=>", findTheElement(arr, 5)); // 8
console.log("result=>", findTheElement(arr, 7)); // 9
console.log("result=>", findTheElement(arr, 10)); // 10
console.log("result=>", findTheElement(arr, 14)); // 11
console.log("result=>", findTheElement(arr, -100)); // -1

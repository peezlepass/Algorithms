function recursiveBinarySearch(arr, target, start, end) {
  let middle = Math.floor((start + end) / 2);
  if (target === arr[middle]) {
    return middle;
  }
  if (target < middle) {
    return recursiveBinarySearch(arr, target, start, middle - 1);
  } else {
    return recursiveBinarySearch(arr, target, middle + 1, end);
  }
}

console.log(
  recursiveBinarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    5,
    0,
    [1, 2, 3, 4, 5, 6, 7, 8, 9].length
  )
);

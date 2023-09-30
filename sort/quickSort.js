let arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2);
  let pivotElement = arr[pivotIndex];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pivotElement) {
      continue;
    }
    if (arr[i] > pivotElement) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return [...quickSort(left), pivotElement, ...quickSort(right)];
}

console.log(quickSort(arr));

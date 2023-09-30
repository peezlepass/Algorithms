let arr = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

let count = 0;
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === target) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(arr, 1)); // 0
console.log(count); // 1
// console.log(linearSearch(arr, 8)); // 3
// console.log(count); // 4
// console.log(linearSearch(arr, 111)); // null
// console.log(count); // 11

// O(n)

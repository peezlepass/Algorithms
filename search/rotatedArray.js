function rotateArrayLeft(arr, n) {
  for (let i = 0; i < n; i++) {
    const first = arr.shift();
    arr.push(first);
  }
  return arr;
}

function rotateArrayRight(arr, n) {
  for (let i = 0; i < n; i++) {
    const last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}

arr = [0, 5, 10, 15, 20];

console.log(rotateArrayRight(arr, 4));

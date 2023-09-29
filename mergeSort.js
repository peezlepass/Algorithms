const input = [];
for (let i = 0; i < 100; i++) {
  input.push(Math.floor(Math.random() * 100));
}

function sort(series) {
  if (series.length === 1) {
    return series;
  }
  const middle = Math.floor(series.length / 2);
  const left = series.slice(0, middle);
  const right = series.slice(middle);
  const leftSorted = sort(left);
  const rightSorted = sort(right);
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  const arr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (arr.length < left.length + right.length) {
    if (leftIndex >= left.length) {
      arr.push(right[rightIndex]);
      rightIndex++;
    } else if (rightIndex >= right.length) {
      arr.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] < right[rightIndex]) {
      arr.push(left[leftIndex]);
      leftIndex++;
    } else {
      arr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return arr;
}

console.log(sort(input));

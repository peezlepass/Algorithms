// Write a function sort_cards() that sorts a shuffled list of cards,
// so that any given list of cards is sorted by rank, no matter the starting collection.
// All cards in the list are represented as strings, so that sorted list of cards looks like this:
// ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

const valueMap = {
  A: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
};

function sortCards(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (valueMap[arr[j]] < valueMap[arr[minIndex]]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

//{valueMap[value] || value}

console.log(
  sortCards(["3", "9", "A", "5", "T", "8", "2", "4", "Q", "7", "J", "6", "K"])
);

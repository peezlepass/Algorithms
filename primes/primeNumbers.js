function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(11));

function primeFactores(number) {
  if (isPrime(number)) {
    return number;
  }
  let arr = [];
  for (let i = 2; i <= number; i++) {
    if (!isPrime(i)) {
      continue;
    }
    if (number % i === 0) {
      arr.push(i);
      number = number / i;
      i = 1;
    }
  }
  return arr;
}

console.log(primeFactores(100));

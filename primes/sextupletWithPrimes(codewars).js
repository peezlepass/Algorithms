// We are interested in collecting the sets of six prime numbers, that having a starting prime p,
// the following values are also primes forming the sextuplet
// [p, p + 4, p + 6, p + 10, p + 12, p + 16]

// 10000 < sum_limit < 29700000

function findPrimesSextuplet(sumLimit) {
  let sieve = [];
  let primes = [];
  let newArr = [];

  for (let i = 2; i <= sumLimit; i++) {
    if (!sieve[i]) {
      primes.push(i);
    }
    for (let j = i + i; j <= sumLimit; j += i) {
      sieve[j] = true;
    }
  }

  let sum = [];
  for (let i = 0; i < primes.length; i++) {
    sum = [
      primes[i],
      primes[i + 1],
      primes[i + 2],
      primes[i + 3],
      primes[i + 4],
      primes[i + 5],
    ];
    if (
      sum[0] + sum[1] + sum[2] + sum[3] + sum[4] + sum[5] > sumLimit &&
      sum[1] - sum[0] === 4 &&
      sum[2] - sum[0] === 6 &&
      sum[3] - sum[0] === 10 &&
      sum[4] - sum[0] === 12 &&
      sum[5] - sum[0] === 16
    ) {
      return sum;
    }
  }
}

console.log(findPrimesSextuplet(23687480)); // [7, 11, 13, 17, 19, 23]);

// https://www.codewars.com/kata/57bf7fae3b3164dcac000352/train/javascript

function sieveOfEratosthenes(number) {
  let sieve = [];
  let primes = [];

  for (let i = 2; i <= number; i++) {
    if (!sieve[i]) {
      primes.push(i);
    }
    for (let j = i * 2; j <= number; j += i) {
      sieve[j] = true;
    }
  }
  return primes;
}

console.log(sieveOfEratosthenes(11));
// O(log n)

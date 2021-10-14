export function factors(number: number) {
  const primes = []

  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      primes.push(i)
      number /= i
    }
  }
  return primes
}

export function factors(number: number) {
  return factorsRecur(number, [])
}

// @ts-ignore
function factorsRecur(number: number, fs: number[]): number[] {
  if (number === 1) return fs

  for (let i = 2; i <= number; i++) {
    if (isPrime(i) && primeDivisor(number, i)) {
      return factorsRecur(number / i, [...fs, i])
    }
  }
}

function isPrime(number: number) {
  for (let i = 2; i < number; i++) if (number % i === 0) return false
  return number > 1
}

function primeDivisor(number: number, prime: number) {
  return number % prime === 0
}

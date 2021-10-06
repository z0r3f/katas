export function mapFizzBuzz(num: number) {
  return [...Array(num).keys()].map(x => {
    return divisibleBy3(x + 1)
      ? divisibleBy5(x + 1)
        ? 'fizzbuzz'
        : 'fizz'
      : divisibleBy5(x + 1)
      ? 'buzz'
      : x + 1
  })
}

function divisibleBy5(n: number) {
  if (n % 5 === 0) return true
  else false
}

function divisibleBy3(n: number) {
  if (n % 3 === 0) return true
  else false
}

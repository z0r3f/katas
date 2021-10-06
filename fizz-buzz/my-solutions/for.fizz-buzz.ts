export function forFizzBuzz(num: number): [] {
  const list = [] as any
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) list.push('fizzbuzz')
    else if (i % 5 === 0) list.push('buzz')
    else if (i % 3 === 0) list.push('fizz')
    else list.push(i)
  }
  return list
}

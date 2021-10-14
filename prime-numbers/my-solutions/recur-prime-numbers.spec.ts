import { factors } from './recur-prime-numbers'

describe('Prime factors', () => {
  it.each([
    [10, [2, 5]],
    [6, [2, 3]],
    [70, [2, 5, 7]],
    [12, [2, 2, 3]],
    [9327186, [2, 3, 3, 11, 17, 17, 163]]
  ])('Prime factors of %s => %s', (given: number, resul: number[]) => {
    const actual = factors(given)
    // const resulMult = resul.reduce((previousValue, currentValue) => previousValue * currentValue)

    expect(actual).toEqual(resul)
  })
})

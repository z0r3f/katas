import { calculator } from './calculator'

describe('Calculator', () => {
  it.each([
    ['1 + 1', 2],
    ['1 - 1', 0],
    ['4 + 2 + 1 + 3', 10],
    ['4 - 2 - 5 + 3', 0],
    ['4 - 2 + 1', 3]
  ])('Calculator of %s => %s', (str: string, resul: number) => {
    const actual = calculator(str)
    expect(actual).toEqual(resul)
  })
})

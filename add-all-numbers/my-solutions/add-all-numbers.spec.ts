import { getAddAllNumbers } from './add-all-numbers'
describe('Add all numbers', () => {
  it.each([
    [[1], 1],
    [[1, 2], 3],
    [[1, 2, 5], 8],
    [[1, 2, 5, 8], 16],
    [[1, 2, 7], 10],
    [[1, 4, 23], 28]
  ])('determines the sum of %s => %s', (given: number[], resul: number) => {
    const actual = getAddAllNumbers(given)
    expect(actual).toBe(resul)
  })
})

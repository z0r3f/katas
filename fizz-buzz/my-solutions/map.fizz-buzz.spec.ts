import { mapFizzBuzz } from './map.fizz-buzz'
describe('Fizz Buzz', () => {
  it.each([
    [1, [1]],
    [2, [1, 2]],
    [3, [1, 2, 'fizz']],
    [5, [1, 2, 'fizz', 4, 'buzz']],
    [15, [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']]
  ])('determines the forFizzBuzz of %s => %s', (given: number, resul: any) => {
    const actual = mapFizzBuzz(given)
    expect(actual).toEqual(resul)
  })
})

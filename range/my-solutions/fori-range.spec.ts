import { range } from './fori-range'

describe('Range', () => {
  it.each([
    [1, 3, [1, 2, 3]],
    [2, 8, [2, 3, 4, 5, 6, 7, 8]],
    [3, 1, [3, 2, 1]],
    [NaN, 5, [0, 1, 2, 3, 4, 5]],
    [3, 3, [3]]
  ])('Range of %s - %s => %s', (initial: number, end: number, resul: {}) => {
    let actual
    if (Number.isNaN(initial)) {
      console.log(`Llamo con rango(${end})`)
      actual = range(end)
    } else {
      console.log(`Llamo con rango(${initial},${end})`)
      actual = range(initial, end)
    }
    expect(actual).toEqual(resul)
  })
})

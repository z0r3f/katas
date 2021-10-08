import { sortAlphabetical } from './alphabetical'

describe('Alphabetical', () => {
  it.each([
    [
      ['a', 'c', 'b'],
      ['a', 'b', 'c']
    ],
    [
      ['fernando', 'noelia', 'ana'],
      ['ana', 'fernando', 'noelia']
    ]
  ])('alphabetical sort of %s => %s', (given: string[], resul: string[]) => {
    const actual = sortAlphabetical(given)
    expect(actual).toEqual(resul)
  })
})

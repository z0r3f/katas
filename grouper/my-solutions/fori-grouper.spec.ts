import { grouper } from './fori-grouper'

describe('Fruit counter', () => {
  it.each([
    [
      [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ],
      {
        20: ['Max', 'Jane'],
        21: ['Alice']
      }
    ]
  ])('Grouper of %s => %s', (given: any[], resul: {}) => {
    const actual = grouper(given)
    expect(actual).toEqual(resul)
  })
})

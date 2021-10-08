import { getFruitCounter } from './fori.fruit-counter'

describe('Fruit counter', () => {
  it.each([
    [['🍋', '🍉', '🍒'], { '🍋': 1, '🍉': 1, '🍒': 1 }],
    [['🍋', '🍉', '🍒', '🍋', '🍉', '🍒', '🍒'], { '🍋': 2, '🍉': 2, '🍒': 3 }]
  ])('Fruit counter of %s => %s', (given: string[], resul: {}) => {
    const actual = getFruitCounter(given)
    expect(actual).toEqual(resul)
  })
})

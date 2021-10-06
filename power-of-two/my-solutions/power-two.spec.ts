import { getPowerByTwo } from './power-two'

describe('Power of Two', () => {
  it('[1] => [1]', () => {
    const given = [1]
    const actual = getPowerByTwo(given)
    expect(actual).toEqual([1])
  })

  it('[3] => [9]', () => {
    const given = [3]
    const actual = getPowerByTwo(given)
    expect(actual).toEqual([9])
  })
  it('[1,3,5] => [1,9,25]', () => {
    const given = [1, 3, 5]
    const actual = getPowerByTwo(given)
    expect(actual).toEqual([1, 9, 25])
  })
})

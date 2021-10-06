import { getHighestNumber } from './highest-number'

describe('Highest number', () => {
  it('Return the highest number of an array with one element', () => {
    const given = [23]
    const actual = getHighestNumber(given)
    expect(actual).toBe(23)
  })

  it('Return the highest number of an array with various elements', () => {
    const given = [23, 9]
    const actual = getHighestNumber(given)
    expect(actual).toBe(23)
  })

  it('Return the highest number of an array with various elements unsort', () => {
    const given = [9, 23]
    const actual = getHighestNumber(given)
    expect(actual).toBe(23)
  })

  it('Return the highest number of an array with three elements unsort', () => {
    const given = [9, 23, -23]
    const actual = getHighestNumber(given)
    expect(actual).toBe(23)
  })
})

export function getHighestNumber(given: number[]) {
  return given.reduce((previousValue, currentValue) =>
    previousValue < currentValue ? currentValue : previousValue
  )
}

export function getAddAllNumbers(given: number[]): number {
  return given.reduce((previousValue, currentValue) => previousValue + currentValue)
}

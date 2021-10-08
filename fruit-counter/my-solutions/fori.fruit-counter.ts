export function getFruitCounter(given: string[]) {
  let resul = new Map()

  for (let i = 0; i < given.length; i++) {
    let value = given[i]
    if (resul.has(value)) {
      resul.set(value, resul.get(value) + 1)
    } else {
      resul.set(value, 1)
    }
  }
  return Object.fromEntries(resul)
}

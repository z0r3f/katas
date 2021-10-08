export function grouper(arr: any[]) {
  const resul = new Map()

  for (let i = 0; i < arr.length; i++) {
    const age = arr[i].age
    const name = arr[i].name
    if (resul.has(age)) {
      resul.set(age, [...resul.get(age), ...[name]])
    } else {
      resul.set(age, [name])
    }
  }
  return Object.fromEntries(resul)
}

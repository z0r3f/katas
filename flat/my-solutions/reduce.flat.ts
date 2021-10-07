export function flat(...arrays: number[][]) {
  return arrays.reduce((acumulator, actual) => [...acumulator, ...actual])
}

// export function flat(...arrays: number[][]) {
//   return arrays.reduce((acumulator, actual) => [...acumulator, ...actual], [])
// }

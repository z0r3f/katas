export function range(initial: number, end?: number) {
  const resul = []

  if (end === undefined) {
    end = initial
    initial = 0
  }
  if (initial < end) {
    for (let i = initial; i <= end; i++) {
      resul.push(i)
    }
  } else {
    for (let i = initial; i >= end; i--) {
      resul.push(i)
    }
  }
  return resul
}

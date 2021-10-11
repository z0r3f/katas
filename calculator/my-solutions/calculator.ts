export function calculator(str: string): number {
  if (str.indexOf('+') > -1) {
    const sumandos = str.split('+')
    let resul = 0
    for (let i = 0; i < sumandos.length; i++) {
      resul += calculator(sumandos[i])
    }
    return resul
  } else if (str.indexOf('-') > -1) {
    const restandos = str.split('-')
    let resul: number = +restandos[0]
    for (let i = 1; i < restandos.length; i++) {
      resul -= calculator(restandos[i])
    }
    return resul
  } else {
    return +str
  }
}

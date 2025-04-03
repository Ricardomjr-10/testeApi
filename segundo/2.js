let diamante = '<<.<<..>><>><.>.>.<<.>.<.>>>><>><>>'
diamante = diamante.replaceAll('.', '')

let cDiamantes = 0
let i = 0

while (i < diamante.length - 1) {
    if (diamante[i] + diamante[i + 1] === "<>") {
        cDiamantes++
        diamante = diamante.substring(0, i) + diamante.substring(i + 2)
        i = 0
    } else {
        i++
    }
}

console.log(`A quantidade de diamantes encontrados:`, cDiamantes)


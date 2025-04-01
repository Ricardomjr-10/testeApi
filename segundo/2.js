let diamante = '<<.<<..>><>><.>.>.<<.>.<.>>>><>><>>'
let nd = ''
let dd = ''
let cp = 0
let cc = 0

diamante = diamante.replaceAll('.', '')

for (let i=0;i<diamante.length;i++){
 
    if(diamante[i] + diamante[i + 1] === '<>') {
      diamante[i] += diamante[i].replaceAll('<>', '')
        cp++
    } 
}

// console.log(nd,cp)


console.log(diamante)
 console.log(diamante.length)



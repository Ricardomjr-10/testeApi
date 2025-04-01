let diamante = '<<.<<..>><>><.>.>.<<.>.<.>>>><>><>>'
let nd = ''
let dd = ''
let cp = 0
let cc = 0

for (let i=0;i<diamante.length;i++){
 
    if(diamante[i] === '.') {
       nd += diamante[i].slice(0,1)
        cp++
    } 
}

console.log(nd,cp)
console.log(diamante)



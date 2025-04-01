let diamante = '<<.<<..>><>><.>.>.<<.>.<.>>>><>><>>'
let nd = ''
let dd = ''
let cp = 0
let cc = 0

diamante = diamante.replaceAll('.', '')

for (let i=0;i<diamante.length;i++){
 
    if(diamante[i] + diamante[i + 1] === '<>') {
     nd += diamante[i] + diamante[i + 1].replaceAll('<>', '')
        cp++
    } 
    
}

let matches = diamante.match(/<>/g);
let quantidade = matches ? matches.length : 0;

console.log(`A string original tinha ${quantidade} ocorrências de '<>'.`)

// console.log(nd,cp)


console.log(nd)
 console.log(diamante.length)



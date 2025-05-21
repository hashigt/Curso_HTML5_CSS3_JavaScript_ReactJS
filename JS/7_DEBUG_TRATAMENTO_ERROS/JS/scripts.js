// 1 - strict mode
// é um modo de desenvolvimento que deixa o js mais rigoroso ma hora de programar

"use strict"
//exemplos que no strict da erro

//opa = "teste"

const opa ="teste" //modo para não da erro

//const undefined = 10

//delete [].length

// 2 - debugger
//É uma instrução que nos permite o debug no console do navegador
//Podemos evidenciar os valores das variáveis em tempo real e com o programa executando

let c = 1
let d = 2

if(c == 1){
    c = d + 2
}

debugger

for(let i = 0; i < d; i++){
    c = c + 2
}

console.log("Executando o loop")

debugger

if(c > 5) {
    c = 25
}
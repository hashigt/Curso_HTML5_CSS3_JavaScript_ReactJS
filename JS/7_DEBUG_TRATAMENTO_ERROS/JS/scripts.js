// // 1 - strict mode
// // é um modo de desenvolvimento que deixa o js mais rigoroso ma hora de programar

// "use strict"
// //exemplos que no strict da erro

// //opa = "teste"

// const opa ="teste" //modo para não da erro

// //const undefined = 10

// //delete [].length

// // 2 - debugger
// //É uma instrução que nos permite o debug no console do navegador
// //Podemos evidenciar os valores das variáveis em tempo real e com o programa executando

// let c = 1
// let d = 2

// if(c == 1){
//     c = d + 2
// }

// debugger

// for(let i = 0; i < d; i++){
//     c = c + 2
// }

// console.log("Executando o loop")

// debugger

// if(c > 5) {
//     c = 25
// }

// 3 - Tratamento de dados
function checkNum(n) {

    const result = Number(n) //quando faz isso transforma o dado em número ou pelo menos tenta
    
    if(Number.isNaN(result)) {
        console.log("Valor incorreto!") //Caso o valor não seja um número
        return
    }

    console.log("Valor correto!")
    return result
}

checkNum(5)
checkNum("10")
checkNum({})
checkNum("Teste")

// 4 - Exceptions -- São erros que nó geramos no programa
//Este recurso faz o programa ser abortado

let x = 10

if(x != 11){
    //throw new Error("O valor de x não pode ser diferente de 11") //throw new Error faz com que aparece um erro e escrito o que esta entre as aspas
}

// 5 - try catch
try {  //tentamos executar algo em try, se um erro ocorrer ele cai no bloco do catch
    const soma = x + y
}
catch(error) { //ele não para o programa, mas mostra uma mensagem de erro no console
    console.log(`Erro no programa: ${error}`)
}

// 6 - finally -- é uma instrução que vai depois do bloco try catch
try {
    const value = checkNum("asf")

    if(!value) {
        throw new Error("Valore inválidos")
    }
}
catch (error) {
        console.log(`aconteceu um problema: ${error}`)
    }
finally { //ele é executado independente de haver algum erro ou não em try
    console.log("O código foi executado!")
}

// 7 - Assertion -- é quando os tratamentos de valores passados pelo usuário, geram um erro
//porém este recurso tem como objetivo nos ajudar no desenvolvimento do programa, é para os devs não usuários
function checkArray(arr) {
    if(arr.length === 0){
        throw new Error("O array precisa ter elementos")
    }
    else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([]) //É para se o dev passar um arry sem valor receber o erro avisando ele disso


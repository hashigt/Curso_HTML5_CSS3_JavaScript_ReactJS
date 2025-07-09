// 1 - var, let e const
var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x) // mesmo estando fora ele atribui o valor que foi colocado no if

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a) // consegue mudar, mas não altera o que está fora
}

console.log(a) //não pega o valor que foi colocado no if


// Exemplo com função
function logName() {
    const name = "Lorenzo" //atribui a variavel name "lorenzo"
    console.log(name)
}

const name = "matheus" //atribui a variavel name "mathues"

logName() //está chamando a função

console.log(name) //para mostrar a variavel name

// 2 - arrow function

const soma = function(a,b){ //função normal
    return a + b
}

const arrowSoma = (a, b) => a + b //Em arrow function

console.log(soma(5, 5))

console.log(arrowSoma(5, 5))

const saudacao = (name) => {
    if(name){
        return `Olá ${name}!` //se a função receber o nome
    }
    else{
        return "Olá" //caso não receba
    }
}

console.log(saudacao("Lorenzo")) //colocando um texto 
console.log(saudacao()) //não colocando em texto
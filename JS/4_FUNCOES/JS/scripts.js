// 1 - Criando função
function minhaFuncao (){
    console.log("Testando")
}

minhaFuncao() //Chamando a função

const minhaFuncaoEmVariavel = function() {
    console.log("Função em variável")
}

minhaFuncaoEmVariavel() //assim usamos a função em uma variavel

function funcaoComParametro(txt) { // (txt) é o parametro da função
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("imprimindo algo") // imprimindo algo vai ficar no lugar onde está o ${txt}
funcaoComParametro("Outra função")

// 2 - Return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){ //cria a função e da "nomes" para as variaveis, onde n1 e n2 são os paramentros que vão ser utilizados na função normalment com algo que é relaciona ao que vai receber
    return n1 + n2
}

const resultado1 = soma(a,b) //chama a função e coloca em uma variavel

console.log(resultado1) //imprimi o resultado da soma no console

console.log(soma(c,d)) //Ou pode ser feito assim, sem precisar colocar em uma variavel

// 3 - Escopo da função
let y = 10

function testandoEscopo (){
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo()

console.log(`Y fora da função é: ${y}`)

testandoEscopo()

// 4 - Escopo aninhado
let m = 10

function escopoAninhado(){
    let m = 20

    if (true) {
        let m = 30

        if(true){
            let m = 40
            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado()
console.log(m)

// 5 - Arrow function
const testeArrow = () => { //A arrow function tem que estar dentro de uma variavel
    // é uma forma resumida de fazer uma função de forma mais facil
    console.log("Esta é uma arrow function")
}

testeArrow()

const parOuImpar = (n) => { //n indicando que vai receber um número
  if(n % 2 === 0 ){
    console.log(`${n} é par.`)
    return // para sair da função
  }
    
  console.log(`${n} é impar.`) // caso não entre o if

}

parOuImpar(5)
parOuImpar(10)

// 6 - mais sobre arrow function
const raizQuadrada = (x) => { //Modo normal de arrow function
    return x * x
}

console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x //Modo resumido, funciona da mesma maneira (só para quando for algo pequeno)

console.log(raizQuadrada2(5))

console.log(raizQuadrada(12))

// 7 - Parametro opcional
const multiplicacao = function(m,n) {
    if(n === undefined){
        return m * 2
    }
    else{
        return m * n
    }
}

console.log(multiplicacao(5)) // como tem apenas o m e não o  n entra no if

console.log(multiplicacao(2, 4))

const saudacao = (name) => { //Exemplo de um uso mais real
    if(!name){ //se ele não tiver um nome
        console.log("Olá!")
        return
    }

    console.log(`Olá ${name}!`) //Caso seja definido
}

saudacao()

saudacao("Lorenzo")

// 8 - valor default
const custoSaudaçao = (name, comprimento = "Olá") => { //Caso não tenha nada atribuido no comprimento
    return `${comprimento}, ${name}` //O comprimento é atribuido o "Olá"
}

console.log(custoSaudaçao("Lorenzo")) // não tendo o cumprimento ele fica como olá

console.log(custoSaudaçao("Lorenzo", "Bom dia"))

const repeteText = (text, repete = 2) => { //caso nada for atribuido ao repete, ele recebera 2 
    for(let i = 0; i < repete; i++){ //vai repetir até i chegar no valor de repete
        console.log(text)
    }
}

repeteText("testando")

repeteText("Agora repete 5 vezes", 5)

// 9 - Closure

// É um conjunto de funções, onde temos um reaproveitamento do escopo interno
// de uma funçãao;

// Pois este escopo não pode ser acessado fora da função,já que é um bloco

// Então há funções internas que aproveitam o escopo, e são chamadas de closure

const multiplicacaoClosure = (n) => {
    return(m) => {
        return n * m
    }
}

const c1 = multiplicacaoClosure(5)

const c2 = multiplicacaoClosure(10)

console.log(c1) //mostra  a função interna, mas ainda armazena o valor 5

console.log(c2) //mostra  a função interna, mas ainda armazena o valor 10

console.log(c1(5)) //Adicionando outro valor a c1, ele faz a multiplicação

console.log(c2(10)) //Adicionando outro valor a c2, ele faz a multiplicação

// 10 - Recursão 
//Um recurso que permite a função se autoinvocar continuamente

const ateDez = (n,m) => { // loop com uma função, n quando começa e m a quantidade que vai ir pulando
    if(n < 10){
        console.log("A função parou de executar!") //Quando chegar a menor que 10
    }
    else{
        const x = n-m //vai diminuindo

        console.log(x) //mostra o valor

        ateDez(x,m) //repete
    }
}
ateDez(100, 7)

function fatorial(x) { //calcula o fatorial de um número
    if(x === 0){
        return 1
    }
    else{
        return x * fatorial(x - 1) //repete
    }
}

const num = 6

const resultado = fatorial(num) //chama a função e coloca na variálvel

console.log(`O fatorial do número ${num} é ${resultado}`)
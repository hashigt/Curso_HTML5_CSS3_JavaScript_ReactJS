// // 1 - var, let e const
// var x = 10
// var y = 15

// if(y > 10) {
//     var x = 5
//     console.log(x)
// }

// console.log(x) // mesmo estando fora ele atribui o valor que foi colocado no if

// let a = 10
// let b = 15

// if(b > 10) {
//     let a = 5
//     console.log(a) // consegue mudar, mas não altera o que está fora
// }

// console.log(a) //não pega o valor que foi colocado no if


// // Exemplo com função
// function logName() {
//     const name = "Lorenzo" //atribui a variavel name "lorenzo"
//     console.log(name)
// }

// const name = "matheus" //atribui a variavel name "mathues"

// logName() //está chamando a função

// console.log(name) //para mostrar a variavel name

// // 2 - arrow function

// const soma = function(a,b){ //função normal
//     return a + b
// }

// const arrowSoma = (a, b) => a + b //Em arrow function

// console.log(soma(5, 5))

// console.log(arrowSoma(5, 5))

// const saudacao = (name) => {
//     if(name){
//         return `Olá ${name}!` //se a função receber o nome
//     }
//     else{
//         return "Olá" //caso não receba
//     }
// }

// console.log(saudacao("Lorenzo")) //colocando um texto 
// console.log(saudacao()) //não colocando em texto

// // const user = {
// //     name: "Lorenzo",
// //     sayUserName() {
// //         setTimeout(function() {
// //             console.log(this)
// //             console.log(`Username: ${this.name}`)
// //         }, 1000)
// //     },
// //     sayUserNameArrow() {
// //         setTimeout(() => {
// //             console.log(this)
// //             console.log(`Username: ${this.name}`)
// //         }, 2000)
// //     }
// // }

// // user.sayUserName()
// // user.sayUserNameArrow()

// // 3 - Filter
// const arr = [1, 2, 3, 4, 5, 6] //Um array

// const numMaiores = arr.filter((n) => { //está filtrando números maiores ou iguais a 3
//     if(n >= 3){
//         return n;
//     }
// });

// console.log(numMaiores)

// const users = [
//     {name: "Lorenzo", disponivel: true},
//     {name: "Pedro", disponivel: false},
//     {name: "Carol", disponivel: true},
//     {name: "Cleuza", disponivel: false},
// ]

// const usersDisponivel = users.filter((user) => user.disponivel)

// console.log(usersDisponivel)

// 4 - Map

const produtos = [
    {nome: "Short", preco: 20.50, categoria: "Roupa"},
    {nome: "Ferro de passar", preco: 100, categoria: "Eletro"},
    {nome: "Geladeira", preco: 659, categoria: "Eletro"},
    {nome: "Blusa", preco: 35.99, categoria: "Roupa"},
]

produtos.map((produto) => {
    if(produto.categoria === "Roupa") {
        produto.onSale = true
    }
})

console.log(produtos)

// 5 - Template literals
const userName = "Lorenzo"
const ano = 20

console.log(`O nome do usuário é ${userName} e ele tem ${ano} anos`)

// 5 - Descructuring
const frutas = ["Maça", "Mamão", "Laranja"]

const [f1, f2 , f3] = frutas //faz o contrario, cria a um nome para cada variavel e depois chama o array "Frutas"

console.log(f1, f3) //só utilizando o que quiser

// 6 - Spread operator

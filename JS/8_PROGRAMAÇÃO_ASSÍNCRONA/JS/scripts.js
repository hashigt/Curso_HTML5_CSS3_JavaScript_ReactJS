// // 1 - setTimeout
// //Estabelecemos uma ação para ser executada após um certo tempo
// console.log("Ainda não executou")

// setTimeout(function(){
//     console.log("Requisição assíncrona") //só vai executar depois de 2 segundos
// }, 2000) //é em milisegundos 1000 milisegundos = 1 segundo

// console.log("Ainda não executou 2")

// // 2 - setInterval
// //ela não para de ser executada, de x tempo ela vai executar novamente
// console.log("Ainda não começou")

// // setInterval(function() { //comentado para não atrapalhar 
// //     console.log("Intervalo assíncrono") 
// // }, 3000)

// console.log("Ainda não começou 2")

// // 3 - Promises
// const promessa = Promise.resolve(5 + 5)//Promise vai criar e resolve vai resolver expressao inicial

// console.log("Algum código")

// promessa
//   .then((value) => { //then metodo que levar indiante o promise
//     console.log(`A soma é ${value}`)
//     return value
//   })

//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`))

// // 4 - Falha na promise
// Promise.resolve(4 * "asd")
//   .then((n) => {
//     if(Number.isNaN(n)) { //Number.isNaN verifica se não é um número
//         throw new Error("Valores inválidos")
//     }
//   })

// .catch((err) => console.log(`Um erro ocorreu: ${err}`)) //mostra o erro

// 4 - Resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function (){
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10) {
        resolve(30)
    }
    else{
        reject("Erro!")
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values)) //o resultado das promises será mostrado junto no mesmo tempo

// 5 - Async functions
//retornam promises, há a possibilidades de receber o resultado delas depois
async function somaComDelay(a, b) {
    return a + b
}

somaComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

console.log("teste async")

// 6 - Await
//serve para aguardar o resultado de uma async function
function resolveComDelay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolveu a promise")
        }, 2000)
    })
}

async function chamadaAsync() {
    console.log("chamando a promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()

// 7 - Generators
//funcionam de forma semelhante as promises, ações pode ser pausadas e continuadas depois
//novos operadores function* e yield
function* Generators() {
    yield 1
    yield 2
    yield 3
}

const gen = Generators() //precisa ser dentro de uma varivel

console.log(gen.next().value) //ele busca o valor conforme é chamado
console.log(gen.next().value) 
console.log(gen.next().value) 
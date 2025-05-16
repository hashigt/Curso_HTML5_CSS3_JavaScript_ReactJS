// // 1 - Arrays
// //Os valores da lista são inseridos em [], cada valor é separado por vírgula
// const lista = [1, 2, 3, 4, 5]

// console.log(lista)

// const itens = ["Lorenzo", true, 2, 9.2, []] //pode ser inserido qualquer tipo

// console.log(itens)

// //Como pegar só um elemento da array
// const arr = ["a", "b", "c", "d"]

// console.log(arr[0]) //dentro dos parenteses vem primeiro a variavel, abre colchetes e para escolher
//                     //o elemento na sequencia, o primeiro elemento sempre será 0 assim em diante
// console.log(arr[1])

// // 2 - Propriedades
// const numeros = [5, 4, 3]

// console.log(numeros.length) //length mostra a quantidades de elementos dentro de uma lista
//                             //Forma mais comum de inserir propriedades .propriedade

// // 4 - Métodos
// const outroNum = [1, 2, 3]

// const allNumeros = numeros.concat(outroNum) //Concat: junta duas arrays

// console.log(allNumeros)

// const text = "Algum texto"

// console.log(text.toUpperCase()) //toUpperCase: Muda o texto para maiusculo

// console.log(typeof text.toUpperCase) //O tipo é function

// console.log(text.indexOf("g")) //indexOf: Localiza o lugar do elemento entre parenteses no texto - *Lembrete ["a", "b", "c"] ordem [0, 1, 2]

// // 5 - objetos
// const personagem = { //se usa {} ao inves de []
//     nome: "Lorenzo", //, para serapar as propriedades
//     ano: 19,
//     job: "Estagiario",
// }

// console.log(personagem)

// console.log(personagem.nome)

// console.log(typeof personagem)

// 6 - Criando e deletando dados
const carro = {
    motor: 2.0,
    marca: "VW",
    modelo: "Tiguan",
    km: 20000,
}

console.log(carro)

carro.porta = 4 // adicionado uma nova propriedade

console.log(carro)

delete carro.km // deletando uma propriedade

console.log(carro)

// 
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object) //instanceof  verifica se um objeto é filho de uma classe

const obj2 = {
    c: [],
}

Object.assign(obj2, obj)

console.log(obj2)

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj)) //keys: verifica as propriedades de um objeto
console.log(Object.keys(obj2))

console.log(Object.entries(obj)) //entries: recebemos arrays dos nomes das propriedades com seus valores

// 9 - mutação
//quando criamos um objeto a partir de outro, este novo objeto não é novo e sim uma referência do primeiro
const a = {
    name: "lorenzo"
}

const b = a //adicionado a em b, b se torna uma referência de a e vice versa

console.log(a) 
console.log(b) //Adicionou o "lorenzo"

a.ano = 19 //adicionando ano ao a

console.log(a)
console.log(b) //Vemos que também adicionou no b

delete b.ano //deletando ano do b

console.log(a) //vemos que também deletou do a
console.log(b)
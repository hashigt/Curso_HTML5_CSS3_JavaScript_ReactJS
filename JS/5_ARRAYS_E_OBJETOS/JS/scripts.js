// 1 - Arrays
//Os valores da lista são inseridos em [], cada valor é separado por vírgula
const lista = [1, 2, 3, 4, 5]

console.log(lista)

const itens = ["Lorenzo", true, 2, 9.2, []] //pode ser inserido qualquer tipo

console.log(itens)

//Como pegar só um elemento da array
const arr = ["a", "b", "c", "d"]

console.log(arr[0]) //dentro dos parenteses vem primeiro a variavel, abre colchetes e para escolher
                    //o elemento na sequencia, o primeiro elemento sempre será 0 assim em diante
console.log(arr[1])

// 2 - Propriedades
const numeros = [5, 4, 3]

console.log(numeros.length) //length mostra a quantidades de elementos dentro de uma lista
                            //Forma mais comum de inserir propriedades .propriedade

const name = "irulam"

console.log(name.length)

// 4 - Métodos
const outroNum = [1, 2, 3]

const allNumeros = numeros.concat(outroNum) //Concat: junta duas arrays

console.log(allNumeros)

const text = "Algum texto"

console.log(text.toUpperCase()) //toUpperCase: Muda o texto para maiusculo

console.log(typeof text.toUpperCase) //O tipo é function

console.log(text.indexOf("g")) //indexOf: Localiza o lugar do elemento entre parenteses no texto - *Lembrete ["a", "b", "c"] ordem [0, 1, 2]

// 5 - objetos
const personagem = { //se usa {} ao inves de []
    nome: "Lorenzo", //, para serapar as propriedades
    ano: 19,
    job: "Estagiario",
}

console.log(personagem)

console.log(personagem.nome)

console.log(typeof personagem)

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

// 7 - mais sobre objetos
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

// 10 - loop em array
const user = ["Lorenzo", "Lucas", "Pedro", "José"]

for(let i = 0; i < user.length; i++){ //user.length vai ver quantos elementos o user tem
    console.log(`Listando o usuário: ${user[i]}`) //acessa o item pelo contador i, assim acompanhando o número
}

// 11 - Push e pop
const array = ["a", "b", "c"]

array.push("d") //.push adiciona um elemento no final do array, pode adicionar varios elementos

console.log(array)

console.log(array.length)

array.pop() //.pop remove um elemento do final do array

console.log(array)

const itemRemovido = array.pop() //O pop fica guardado, assim conseguindo adicionar em uma variavel

console.log(itemRemovido)

console.log(array)

// 12 - shift e unshift
const lists = ["a", "b", "c"]

const list = lists.shift() //Shift remove o primeiro elemento do array

console.log(list) //Mostra o que foi removido

console.log(lists) //mostra o array sem o primeiro elemento

lists.unshift("1", "z") //unshift Adiciona elementos na frente do array

console.log(lists)

//  13 - indexOf e lastIndexOf
const frutas = ["morango", "uva", "maça", "uva"]

console.log(frutas.indexOf("uva")) // indexOf diz em qual posição o elemento está
console.log(frutas.indexOf("maça"))

console.log(frutas.lastIndexOf("uva")) // lastIndexOf mostra o ultimo do elemento

// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subMatriz = testeSlice.slice(2, 4) //slice vai mostrar os elementos de x até x - 2 até 4

console.log(subMatriz) //Mas há um problema ele não mostra o ultimo, (2, 4)exemplo("c", "d")

console.log(testeSlice)

const subMatriz2 = testeSlice.slice(2, 4 + 1) //Para mostrar o ultimo elemento precisa adicionar o +1

console.log(subMatriz2)

const subMatriz3 = testeSlice.slice(2)//só colocando 1 valor, ele vai mostrar os seguintes

console.log(subMatriz3)

// 15 - foreach
const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => { //O foreach é como o for ou while mas é um método
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`) //tem que colocar a variavel.o tipo dela
})

// 16 - includes
const marcas = ["BMW", "VW", "Fiat"]

console.log(marcas.includes("Fiat")) //retorna um booleano 

if(marcas.includes("BMW")) { //uma forma de usar o includes
    console.log("Há carros da marca BMW!") 
}

// 17 - Reverse
//Ele inverte os elementos de um array

const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse()

console.log(reverseTest)

// 18 - Trim
const trimTeste = "        testando\n   "

console.log(trimTeste)

console.log(trimTeste.trim())//Trim Remove tudo que não é texto em uma string(caracteres especiais e espaços em branco)

// 19 - padStart
//insere um texto no começo da string
const testePadstart = "1"

const novoNum  = testePadstart.padStart(4, "0") //onde está o 4 delimita o tamanho/depois da virgula escreve o que quer que apareca
//o padstart colcoca para ser inserio antes da variavel
console.log(testePadstart)

console.log(novoNum)

const testepadEnd = novoNum.padEnd(10, "0") //o padEnd coloca o que está em "" depois da variavel

console.log(testepadEnd)

// 20 - split
//divide uma string em um array
const frase = "Batatinha frita um dois três"

const arrayFrase = frase.split(" ") //cada elemento é determinado por um separador em comum(Espaço,Virgula,ponto e virgula)

console.log(arrayFrase)

// 21 - join
//une um array em uma string
const fraseDenovo = arrayFrase.join(" ")

console.log(fraseDenovo)

const itensComprar = ["teclado","monitor","cabo"]

const fraseCompra = `Precisamos comprar: ${itensComprar.join(", ")}` //assim colocando uma virgula e espaço depois de cada elemento

console.log(fraseCompra)

// 22 - reapeat
const palavra = "testando "

console.log(palavra.repeat(4)) //repete n vezes onde n é o valor dentro ()

// 23 - rest operator
const somaInfinita = (...arg) => { //... aceita qualquer tipo 
    let total = 0

    for(let i = 0; i < arg.length; i++){
        total+= arg[i] //+= soma o número e substitui o total 
    }
    return total
}

console.log(somaInfinita(1, 2, 3,))

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7))

// 24 - for of
//o número da repetição é baseado no array utilizado

const somaInfinita2 = (...arg) => { //é parecido com o for, mas é mais simples
    total = 0

    for(num of arg){
        total+=num
    }
    return total
}

console.log(somaInfinita2(1, 2, 3))

// 25 - Destructuring em objetos
const detalhesUser = {
    primeiroNome: "Lorenzo",
    sobrenome: "Trindade",
    trabalho: "Estagiario"
}
//desse modo ele identifica os que estam com o mesmo nome e criam variaveis automaticamente
const {primeiroNome, sobrenome, trabalho} = detalhesUser 

console.log(primeiroNome, sobrenome, trabalho)

// renomear varialvel
const {primeiroNome: nomeUm} = detalhesUser

console.log(nomeUm) //a variavel anterior não deixa de existir

// 26 - Destructuring em array
// utilizaremos colchetes e não temos nomes das chaves
const minhaLista = ["Moto", "Carro", "Carroça"]

//é na ordem, não da erro se tiver mais elementos que variaveis ou o contrario
const [veiculoA, veiculoB, veiculoC] = minhaLista 

console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON
//javaScript object notation, é um dado em formato de texto
//Utilizado para a comunicação entre API e front-end
//REGRAS: apenas aspas duplas e não aceita comentários

//Estrutura de JSON, cuidado não pode ter nenhum erro
const myJson = `{"nome": "Lorenzo", "ano": 19, "abilidades": ["C", "HTML", "CSS"]}`

console.log(myJson)

// 28 - JSON para objeto e objeto para JSON
const object = JSON.parse(myJson) //JSON.parse: transforma json em objeto

console.log(object)

console.log(object.nome)

const novoJson = JSON.stringify(object) //JSON.stringify: transforma objeto em json 

console.log(novoJson)
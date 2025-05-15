// 1 - Number
console.log(typeof 4); //typeof exibe o tipo
console.log(typeof 3.4);
console.log(typeof -234);

// 2 - Operações artméticas
console.log(2+5)
console.log(2-5)
console.log(2*5)
console.log(2/5)

console.log(2 + 5 * 2)

// 4 - Strings
console.log("Um texto")

console.log(typeof'Mais um texto')

// 5 - Símbolos especias em string
console.log("texto \nlinha abaixo") //Pula 1 linha

console.log("Espaçamento \t com tab") //Espaço do texto ao outro

// 6 - Concatenação
console.log("Oi," + "tudo " + "bem?") // Será melhor utilizado em variáveis

// 7 - Interpolação ou Template strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`) //união de texto o 2 + 2 em $() é uma sting, só funciona com crase

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`) //só para conhecimento(não é utilizado)

// 8 - Booleans
console.log(5>20) //Qualquer comparação com os sinais "<, > e ==" resulta em um booleano

console.log(30>4)

console.log(typeof false)

// 9 - Comparações
console.log(5 > 4) //Maior que

console.log(5 < 4) //Menor que

console.log(5 >= 4) //Maior ou igual

console.log(5 == 4) //Igual

console.log(5 != 4) //Diferente

// 10 - Idênticos
console.log(9 == "9") //Vai dar true, mesmo sendo number e string

console.log(9 + "9") // = 99, por ser dados diferentes eles são concatenados, *prestar atenção

console.log(9 === "9") //False, utilizando o "===" ele leva em consideração o tipo também

console.log(9 !== "9") // !== também leva em consideração o tipo

// 11 - Operadores lógicos
console.log(true && true) // Em && os 2 precisam ser verdadeiros para dar true

console.log(5 > 2 && 5 < 2)

console.log(5 > 2 || "lorenzo" === 1) //Em || só um lado precisa ser verdadeiro para dar true

console.log(!true) //O ! inverte

console.log(!5 > 2)


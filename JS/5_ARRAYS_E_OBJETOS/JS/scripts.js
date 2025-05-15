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

// 4 - Métodos
const outroNum = [1, 2, 3]

const allNumeros = numeros.concat(outroNum) //Concat: junta duas arrays

console.log(allNumeros)

const text = "Algum texto"

console.log(text.toUpperCase()) //toUpperCase: Muda o texto para maiusculo

console.log(typeof text.toUpperCase) //O tipo é function

console.log(text.indexOf("g")) //indexOf: Localiza o lugar do elemento entre parenteses no texto
                               //*Lembrete ["a", "b", "c"] ordem [0, 1, 2]
// 1 - movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes) //mostra todos elementos em formato de lista

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent) //para acessar o texto do elemento 1

// 2 - Selecionando por tag
//com o método getElementsByTagName selecionamos um conjunto de elementos por uma tag em comum
const listaItens = document.getElementsByTagName("li")

console.log(listaItens)

// 3 - Selecionado por id
const title = document.getElementById("title") //assim seleciona só um elemento por ser por seu id

console.log(title)

// 4 - Selecionando elementos por classe
const products = document.getElementsByClassName("product")

console.log(products)

// 5 - Selecionando elementos por css
const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const mainContainer = document.querySelector("#main-container") //para selecionar apenas um elemento

console.log(mainContainer)
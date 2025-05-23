// // 1 - movendo-se pelo DOM
// console.log(document.body)

// console.log(document.body.childNodes) //mostra todos elementos em formato de lista

// console.log(document.body.childNodes[1].childNodes)

// console.log(document.body.childNodes[1].childNodes[1].textContent) //para acessar o texto do elemento 1

// // 2 - Selecionando por tag
// //com o método getElementsByTagName selecionamos um conjunto de elementos por uma tag em comum
const listaItens = document.getElementsByTagName("li")

// console.log(listaItens)

// // 3 - Selecionado por id
// const title = document.getElementById("title") //assim seleciona só um elemento por ser por seu id

// console.log(title)

// // 4 - Selecionando elementos por classe
const products = document.getElementsByClassName("product")

console.log(products)

// // 5 - Selecionando elementos por css
// const productsQuery = document.querySelectorAll(".product")

// console.log(productsQuery)

const mainContainer = document.querySelector("#main-container") //para selecionar apenas um elemento

// console.log(mainContainer)

// // 6 - insertBefore -- Cria um elemento antes de um outro elemento
// const p = document.createElement("p") //criando um paragrafo

// const header = title.parentElement //Selecionando o header utilizando o title

// header.insertBefore(p, title) //inserindo um paragrafo antes do título


// // 7 - appendChild -- adiciona um elemento dentro do outro
// const navLinks = document.querySelector("nav ul") //selecionado a ul da nav

// const li = document.createElement("li") //criando um li

// navLinks.appendChild(li) //adicionado o li na ul

// const ul = document.createElement("ul") //criando uma ul

// const nav = document.querySelector("nav") //selecionando a nav

// nav.appendChild(ul) //adicionando a ul dentro a nav


// // 8 - replaceChild -- troca um elemento
// const h2 = document.createElement("h2")

// h2.textContent = "Meu novo título" //assim modificando o que esta escrito

// header.replaceChild(h2, title) //seleciona o header pq ele é o elemento pai de title


// // 9 - createTextNode
// const myText = document.createTextNode("Agora vamos colocar mais um título")

// console.log(myText)

// const h3 = document.createElement("h3")

// h3.appendChild(myText)

// console.log(h3)

// mainContainer.appendChild(h3)


// // 10 - Trabalhando com atributos
// const primeiroLink = navLinks.querySelector("a") // selecionando o primeiro a, é o link

// console.log(primeiroLink)

// //setAttribute: para alterar o valor dos atributos, ele leva o nome do atributo e o valor para alterar
// primeiroLink.setAttribute("href", "https://www.google.com") //para mudar o href(para onde o link vai levar), mudamos o https 

// //getAttibute: para ler os valores dos atributos
// console.log(primeiroLink.getAttribute("href")) //mostra o que está escrito no href

// primeiroLink.setAttribute("target", "_blank") //além do primeiroLink abrir a pag do google ele vai abrir outra aba


// // 11 - altura e largra dos elementos
// const footer = document.querySelector("footer")

// console.log(footer.offsetWidth) //mostra a largura
// console.log(footer.offsetHeight) //mostra a altura

// console.log(footer.clientWidth) //mostra a largura sem considerar a borda
// console.log(footer.clientHeight) //mostra a altura sem considerar a borda


// 12 - Posição do elemento
//getBoundingClientRect: podemos pegar várias informações da posição do elemento
const product1=products[0]

console.log(product1.getBoundingClientRect())

// 13 - CSS com js
mainContainer.style.color = "red" //cor da fonte

mainContainer.style.backgroundColor = "#333" //cor de fundo

mainContainer.style.paddingBottom = "15px" //espaçamento em baixo

// 14 - alterando estilos de varios elementos
for(const li of listaItens) {
    li.style.background = "red"
}

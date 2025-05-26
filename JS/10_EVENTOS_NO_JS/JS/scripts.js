// 1 - adicionando eventos
//addEventListener: ativar um método
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    console.log("Clicou aqui!")
})

// 2 - Removendo eventos
const segundoBtn = document.querySelector("#btn")

function imprimirMensagem() { //vai executar isso ao clicar
    console.log("Teste")
}

segundoBtn.addEventListener("click", imprimirMensagem) //está adicionando um evento ao clicar

const btnTres = document.querySelector("#outro-btn")

btnTres.addEventListener("click", () => {  //adiconando ao clicar
    console.log("Evento removido")
    segundoBtn.removeEventListener("click", imprimirMensagem) //remove o efeito do evento, para de executar
})

// 3 - argumento do evento
// Todo evento possui um argumento especial, que contém informações do mesmo
const meuTitulo = document.querySelector("#meu-titulo")

meuTitulo.addEventListener("click", (event) => {
    console.log(event)
    console.log(event.offsetX) //saber a posição do elemento no eixo X
    console.log(event.pointerType) 
    console.log(event.target) //evento alvo, mas resumido
})

// 4 - propagação
const containerBtn = document.querySelector("#btn-container")
const btnDentroContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => { //ao clicar a área do container
    console.log("Evento 1")
})

btnDentroContainer.addEventListener("click", (e) =>{ //ao clicar no botão
    e.stopPropagation() // ativa o evento 2 sem ativar o 1, sem o stopPropagation ativaria os 2
    console.log("Evento 2")
})
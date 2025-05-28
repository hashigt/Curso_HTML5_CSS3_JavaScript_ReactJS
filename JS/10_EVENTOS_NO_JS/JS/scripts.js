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

// 5 - Removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault() //para remover o evento padrão de levar para outra pag

    console.log("Não alterou a página")
})

// 6 - Eventos da tecla
document.addEventListener("keyup", (e) => { // keyup: ativa quando a tecla é solta
    console.log(`soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => { // keydown: quando é pressionada
    console.log(`soltou a tecla ${e.key}`)
})

// 7 - Eventos de mouse
const mouseClick = document.querySelector("#mouse")

mouseClick.addEventListener("mousedown", () => {// mousedown: pressionou botão do mouse
    console.log("pressionou o botão do mouse")
})

mouseClick.addEventListener("mouseup", () => {// mouseup: soltou botão do mouse
    console.log("soltou o botão do mouse")
})

mouseClick.addEventListener("dblclick", () => {// dblclick: ativa com duplo click
    console.log("Clique dublo")
})

// 8 - Movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo x ${e.x}`) //mostra exatamente onde o mouse está
    // console.log(`No eixo y ${e.y}`)
})

// 9 - evento com scroll
window.addEventListener("scroll", (e) =>{ //tem que colocar window, a janela inteira é a referencia
    if(window.pageYOffset > 200) { //se a tela chegar a mais de 200px 
        console.log("Passamos de 200px")
    }
})

// 10 - eventos de focus/blur
// focus: elemento é disparado quando focamos
// blur: elemento é disparado quando perdemos o foco
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => { //quando clicar no input vai alertar
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => { //quando sair do input vai alertar
    console.log("Saiu do input")
})

// 11 - evento de carregamento da pagina (alerta: só é utilizado em formularios)
window.addEventListener("load", () => { // load: quando a pag for carregada
    console.log("A pagina foi carregada")
})

window.addEventListener("beforeumload", (e) => { // // beforeumload: quando o usuario sai da pag
    e.preventDefault()
    e.returnValue = ""
})

// 12 - técnica de debouce
//é utilizada para fazer um evento disparar menos vezes, para poupar memória
const debouce = (f, delay) => { //delay é o tempo que ela ocorre

    let timeout //let ao inves de const para conseguir mudar o valor

    return(...arguments) => { //mostrar todos argumentos da função
        if(timeout){ //se tiver um timeout, se envocar mais de uma vez tem que matar o timeout atual
            clearTimeout(timeout) //limpar o timeout para ele pode começar denovo
        }

        timeout = setTimeout(() =>{
            f.apply(arguments) //execução da função com o argumento, programando uma execução da função
        }, delay) 
    }
}

window.addEventListener("mousemove", debouce(() => {
    console.log("Executando a cada 400ms") //será o f do debouce
}, 400)
)
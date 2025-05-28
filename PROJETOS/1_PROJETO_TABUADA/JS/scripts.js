// Seleção de elementos
const multiplicacaoForm = document.querySelector("#multiplicacao-form")
const numberImput = document.querySelector("#number")
const multiplicacaoInput = document.querySelector("#multiplicador")

const multiplicacaoTitle = document.querySelector(
    "#multiplicacao-title span"
)

const multiplicacaoTable = document.querySelector("#multiplicacao-operacoes")

// funções
const criarTabela = (number, multiplicadorNumber) => {
    //innerHTML: HTML interno dessa div
    multiplicacaoTable.innerHTML = "";//vai apagar o texto que está escrito na tabuada do número

    for(i = 1; i <=multiplicadorNumber; i++){
        const result = number * i

        const template = `<div class="row">
                <div class="operacao">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`

        const parser = new DOMParser() //permite mandar o texto acima para html

        const htmltemplate = parser.parseFromString(template, "text/html") //transfere ou transforma uma string em html

        const row = htmltemplate.querySelector(".row")

        multiplicacaoTable.appendChild(row) //adicionando row na table, baseado nas vezes que vai ter multiplicadorNumber
    }

    multiplicacaoTitle.innerText = number //adicionando o número que vai ter na tabuada depois dos :
}

// Eventos
multiplicacaoForm.addEventListener("submit", (e) => {
    e.preventDefault() //para quando clicar em calcular não recarregue a pag

    // multiplicacaoNumber recebe o valor do numberInput
    const multiplicacaoNumber = +numberImput.value //+ na frente para tranformar em inteiro

    const multiplicadorNumber = +multiplicacaoInput.value //pegar o valor de cada input

    if(!multiplicacaoNumber || !multiplicadorNumber) return; //só vai imprimir os números caso os dois estejam preenchidos

    criarTabela(multiplicacaoNumber, multiplicadorNumber)
})
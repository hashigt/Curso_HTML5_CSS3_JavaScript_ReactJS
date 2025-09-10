// 1 - Variáveis
let nome = "Lorenzo" 

console.log(nome)

nome = "lorenzo Trindade" // let deixa a variavel ser modificada

console.log(nome)

const idade = 19

console.log(idade)

// idade = 20 - const não deixa a variavel ser modificada

// 2 - mais sobre variáveis
const nomecompleto = "Lorenzo" // o js entende a diferença de uma letra maiuscula para minuscula

const nomeCompleto = "Hashigt"

console.log(nomecompleto) // com isso as variaveis sao guardadas em locais diferentes sem se sobrepor

console.log(nomeCompleto)

let a = 10, // pode ser feito assim tambem
    b = 20,
    c = 30;

console.log(a, b, c)

// 3 - Prompt
const age = prompt("Digite sua idade:") //Prompt abre uma caixa para receber um dado do usuario e guarda na variavel
// quando a pagina é recarregada vai aparecer a caixa

console.log(`Você tem ${age} anos.`) // quanto vai usar uma variavel tem que usar `` ao inver de "" e colocar a varialver dentro de ${...}

// 4 - Alert
alert("testando") // emite uma mensagem que escrevemos em ""

const z = 7

alert(`O número é ${z}`) // como normalmente é usado, mas nao e algo legal no ambiente profissional

// 5 - Math
console.log(Math.max(5,2,3,10)) //math.max monstra o maior número

console.log(Math.floor(5.12)) //Arredonda para baixo o número

console.log(Math.ceil(5.14)) //Arredonda para cima o número

// 6 - Console
console.log("teste!")

console.error("ERRO!") //Deixa em destaque vermelho

console.warn("Aviso") //Deixa em destaque amarelo

// 7 - if
const m = 10

if(m > 5) { // caso o que estiver dentro dos parenteses estiver certo ele entra no if, se for falso ele ignora e segue o codigo
    console.log("M é maior que 5")
}

const user = "Gabriel"

if(user === "Gabriel") { // === identico
console.log(`Olá ${user}`)
}

// 8 - Else
const login_id = false

if(login_id) { //(login_id) é igual a (login_id === true)
    console.log("Está logado")
}
else{ // quando o if for negativo, entra no else
    console.log("não está logado")
}

const q = 10
const w = 15

if(q > 5 && w > 20){ 
    console.log("números mais alto")
}
else{
    console.log("Os números não são mais alto")
}

// 9 - Else if
if(1 > 2){
    console.log("Teste")
}
else if(2 > 3){ //Else if não tem limite
    console.log("Teste 2")
}
else if(5 > 1){ // é o intermediario do if e else
    console.log("Agora sim")
}

const usar_name = "Lorenzo"
const usar_age = 20

if(usar_name === "Mario"){
    console.log("Bem vindo Mario!")
}
else if(usar_name === "Lorenzo" && usar_age === 20){ //entrou no else if, não entra no else
    console.log("Olá lorenzo, você tem 20 anos")
}
else{
    console.log("Nenhuma condição aceita")
}

// 10 - while
let p = 0 //Contador, Número para dar inicio e ser atualizado até a condição ser atingida

while(p < 3){ //ele se repete até a condição dentro do () seja falsa
    console.log(`Repetindo ${p}`)
    p++
}

// 11 - do while
let o = 10

do{ //
    console.log(`Valor do o : ${o}`)
    o--
}
while(o > 1)

// 12 - For
for (let t = 0; t < 10; t++) { // tem a mesma utilidade de while mas muda o que fica dentro dos ()
    // cria uma variavel(let i = 0;), coloca sua condição de parada(i < 5) e incrementa a variavel para seguir(i++ igual a i = i + 1)
    console.log("Repetindo isso...")
}

let j = 0 // ou pode criar a variavel fora do for e utilizar no for

for(j; j < 5; j++){
    console.log(`${j}`)
}

// 13 - Break
for(let g = 20; g > 10; g--){ 
    console.log(`O valor de g é: ${g}`)

    if(g === 12) {
        console.log("O g é 12!")
        break //faz a repetição parar e sair do loop
    }
}

// 14 - Continue
for(let s = 1; s < 10; s++){
    //Operador de resto = % (exemplo: 5 % 2 = 1)
    if(s % 2 === 0){
        console.log("Número par!")
        continue
    }
    console.log(s)
}

// 15 - Switch
//No caso de ter muitos if/else, podemos usar o switch
const job = "Programador"

switch(job) {
    case "Advogado": //Case é como o if, *lembrar dos ":"
        console.log("Você é um advogado")
        break //tem que colocar o break para encerrar o case
    case "Programador":
        console.log("Você é um progamador")
        break
    case "Entregador":
        console.log("Você é um Entregador")
        break
    default: //default é como o else
        console.log("Profissão não encontrada")
}
// 1 - Variáveis
let nome = "Lorenzo"

console.log(nome)

const idade = 19 //const não deixa a variavel mudar

console.log(idade)

// 2 - mais sobre variáveis
const nomecompleto = "Lorenzo"

const nomeCompleto = "Hashigt"

console.log(nomecompleto)

console.log(nomeCompleto)

// 3 - Prompt
const age = prompt("Digite sua idade:") //Prompt é pouco utilizado em projetos reais

console.log(`Você tem ${age} anos.`)

4 - Alert
const z = 7

alert("testando")

alert(`O némero é ${z}`)

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

if(m > 5) {
    console.log("M é maior que 5")
}

const user = "Gabriel"

if(user === "Gabriel") {
console.log(`Meu nome é ${user}`)
}

// 8 - Else
const login_id = false

if(login_id) { //(login_id) é igual a (login_id === true)
    console.log("Está logado")
}
else{
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
else if(5 > 1){
    console.log("Agora sim")
}

const usar_name = "Lorenzo"
const usar_age = 20

if(usar_name === "Mario"){
    console.log("Bem vindo Mario!")
}
else if(usar_name === "Lorenzo" && usar_age === 20){
    console.log("Olá lorenzo, você tem 20 anos")
}
else{
    console.log("Nenhuma condição aceita")
}

// 10 - while
let p = 0 //Contador, Número para dar inicio e ser atualizado até a condição ser atingida

while(p < 3){
    console.log(`Repetindo ${p}`)
    p++
}

// 11 - do while
let o = 10

do{ //não é utilizado no ambiente corporativo
    console.log(`Valor do o : ${o}`)
    o--
}
while(o > 1)

// 12 - For
for (let t = 0; t < 10; t++) {
    console.log("Repetindo isso...")
}

// 13 - Break
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`)

    if(g === 12) {
        console.log("O g é 12!")
        break //Vai parar no 12
    }
}

// 14 - Continue
for(let s = 1; s < 10; s++){
    //Operador de resto = %
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
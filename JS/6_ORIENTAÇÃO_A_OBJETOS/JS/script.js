//Orientação a objetos é uma paradigma de progamação
// 1 - métodos 
const animal = {
    nome: "marley",
    latir: function () {
        console.log("au au")
    }
}

console.log(animal.nome)

animal.latir()

// aprofundando
const pessoa = { //cria objeto pessoa
    nome: "Lorenzo",

    getNome: function() {
        return this.nome
    },

    setNome: function(novoNome) {
        this.nome = novoNome
    },
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome("Bernardo")

console.log(pessoa.getNome())

// 2 - Prototype
//fallback: quando uma propriedade não existe em um dado/objeto, ela é procurada no seu ancestral
const text = "abc"

console.log(Object.getPrototypeOf(text)) //Object.getPrototypeOf mostra o ancestral do dado

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []

console.log(Object.getPrototypeOf(arr))


const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype) //Object é pai de myObject

const segundoObject = Object.create(myObject) //cadeia de prototype, um objeto herdando outro

console.log(segundoObject)

console.log(segundoObject.a) //conseguimos acessar a, sem ter sido criado em segundoObject

console.log(Object.getPrototypeOf(segundoObject) === myObject) //myObject é pai de segundoObject

// 3 - Classes básicas
const cachorro = {
    raca: null,
}

const pastorAlemao = Object.create(cachorro) //cria um objeto que herda classe cachorro

pastorAlemao.raca = "Pastor Alemão" //usa do cachorro e raca que é nulo e substitui por "Pastor Alemão"

console.log(pastorAlemao)

const pinscher = Object.create(cachorro) //cria um objeto que herda classe cachorro

pinscher.raca = "Pinscher" //usa do cachorro e raca que é nulo e substitui por "Pinscher"

console.log(pinscher)

// 4 - classes baseadas em funções construtoras
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})  //conseguimos iniciar as propriedades com a criação do objeto

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const neve = criarCachorro("neve", "Labrador") //utilizando a classe criarCachorro

console.log(neve)

const night = criarCachorro("Night", "pitbull")

console.log(night)

// 5 - Funções como classe
//O new é utilizado para instanciar novos objetos(como varias outras linguagens)

function Cachorro(nome, raca) {//não precisa do objeto vazio como anteriormente
    this.nome = nome 
    this.raca = raca
}

const viraLata = new Cachorro("Bob", "Vira-lata") //será igual a anterior mas com uma nova palavra a new

console.log(viraLata)

// 6 - Métodos na função construtora
Cachorro.prototype.uivar = function() { //Para adicionar métodos antes da criação do objeto,podemos acessar o prototype e colocá-los lá
    console.log("Auuuuuu")
}

console.log(Cachorro.prototype)

viraLata.uivar()

// 7 - classes es6
//Nas versões mais atuais do js abandonamos as functions e utilizamos as classes

class GatoClasse {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
}

const videl = new GatoClasse("Videl", "Pelo curto brasileiro")

console.log(videl)

// 8 - mais sobre classes
//não podemos adicionar propriedades diretamente as classes
//Precisa ser feito ao inicia-la ou pelo prototype

class Caminhao {
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const descr = new Caminhao(5, "Azul")

console.log(descr)

descr.descreverCaminhao()

Caminhao.prototype.motor = 4.0 //esse é o mode de adicionar propriedades corretamente

const c2 = new Caminhao(7, "Amarelo")

console.log(c2.motor)

// 9 - override
class Humano {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

const novoNome = new Humano("Lorenzo", 19)

console.log(novoNome)

console.log(Humano.prototype.idade)

Humano.prototype.idade = "Não definido"

console.log(novoNome.idade)

console.log(Humano.prototype.idade)

10 - Symbol
// Quando utilizamos o recurso de symbol com classe, é  possível uma propriedade única e imutável
// é útil quando a um dado que se repetirá em todos os objetos criados a partir da classe
class Aviao {
    constructor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2

Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 9)

console.log(boeing)

console.log(boeing[asas]) //entre [...] para acessar o valor

console.log(boeing[pilotos])

// 11 - Get e Setters
//get é um método utilizado para exibir o valor de alguma propriedade
//set é utilizado para alterar o valor
class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const meuPost = new Post("Algum post", "É um post sobre programação") //não é obrigado passar os mesmo parametros para o constructor

console.log(meuPost)

console.log(meuPost.exibirTitulo)

meuPost.adicionarTags = "Programação, Javascript, js"

console.log(meuPost)

// 12 - Herança
//super para enviar os valores para a classe pai
class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero { //Utilizamos a palavra extends, para adicionar a classe que vai trazer as propriedades
    constructor(patas, nome) {
        super(patas, patas) //o primeiro é o que vc quer mudar, o segundo é onde
        this.nome = nome
    }
}

const fantasma = new Lobo(4, "Fantasma")

console.log(fantasma)

console.log(fantasma.patas)

// 13 - instanceof
//ele verifica se um objeto é pai de outro, para ter certeza da ancestralidade
console.log(fantasma instanceof Lobo)


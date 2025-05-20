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
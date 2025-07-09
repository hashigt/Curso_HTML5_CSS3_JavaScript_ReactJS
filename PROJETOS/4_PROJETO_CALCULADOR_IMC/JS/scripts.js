// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// Seleção de elementos
const imcTable = document.querySelector("#imc-table");

const heightInput = document.querySelector("#height"); //pegando o valor de altura
const weightInput = document.querySelector("#weight");//pegando peso
const calcBtn = document.querySelector("#calc-btn"); //pegando botão de calcular
const clearBtn = document.querySelector("#clear-btn"); //pegando botão de limpar os dados respondidos

// Funções
function createTable(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-data");

    const classification = document.createElement("p");
    classification.innerText = item.classification;

    const info = document.createElement("p");
    info.innerText = item.info;

    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    imcTable.appendChild(div);
  });
}

function cleanInputs() {
  heightInput.value = ""
  weightInput.value = ""
}

function validDigits(Text) {
  return Text.replace(/[^0-9,]/g, "")
}

function calcimc(weight, height) {
  const imc = (weight / (height * height)).toFixed(1)
}
// Inicialização
createTable(data)

// Eventos
[heightInput, weightInput].forEach((el) => { 
  el.addEventListener("input", (e) => { 
    const updatedValue = validDigits(e.target.value);

    e.target.value = updatedValue;
  }) 
})

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const weight = +weightInput.value.replace(",", ".")
  const height = +heightInput.value.replace(",", ".")

  if(!weight || !height) return;

  const imc = calcimc(weight, height)

  console.log(imc)
})

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  cleanInputs()
})
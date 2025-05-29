const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

// eventos

// Gerar QR code
function geradorQrCode() {
    const qrCodeInputValue = qrCodeInput.value //pegando o valor do input

    if(!qrCodeInputValue) return //se não tiver nenhum valor return

    qrCodeBtn.innerText = "Gerando código..." //quando clicar no botão o texto vai mudar 

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}` //está sendo gerado por uma api

    qrCodeImg.addEventListener("load", () => { //load: mostra depois que carregar
        container.classList.add("active")//mostra o qr code
        qrCodeBtn.innerText = "Código criado!"
    }) 
}

qrCodeBtn.addEventListener("click", () => {
    geradorQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => { //adicionando para funcionar clicando enter
    if(e.code == "Enter"){
    geradorQrCode()   
    }
})

// limpar área do QR code
qrCodeInput.addEventListener("keyup", () => { //voltar ao normal quando apagar o texto 
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR code"
    }
})
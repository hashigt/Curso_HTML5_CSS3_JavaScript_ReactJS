const button = document.querySelectorAll("#image-selecionador li")
const image = document.querySelector("#produto-img")

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)

        button.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected")
        })
    
    const buttons = e.target

    const id = buttons.getAttribute("id")

    buttons.querySelector(".color").classList.add("selected")

    image.classList.add("changing") //abaixa a opacidade
    image.setAttribute("src",`img/iphone_${id}.jpg`) //vai mudar com base no nome do jpg
    
    setTimeout(() => {
        image.classList.toggle("changing")
    }, 200)
  })
})
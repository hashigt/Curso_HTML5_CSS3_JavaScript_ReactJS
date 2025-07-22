const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => { /*IntersectionObserver ele permite detectar quando um elemento se torna visível ou invisível na tela*/
   entries.forEach(entrada => {
      if(!entrada.isIntersecting) return

      const image = entrada.target

       image.src = image.src.replace("?w=10", "?w=1000");

       observer.unobserve(image)
   })
}, {})

images.forEach((image) => {
   observer.observe(image)
});
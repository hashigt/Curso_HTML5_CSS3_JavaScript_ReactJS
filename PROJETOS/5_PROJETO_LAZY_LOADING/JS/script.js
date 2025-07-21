const images = document.querySelectorAll(".image-container img");

images.forEach((image) => {
   image.src = image.src.replace("?w=10", "?w=1000");
});
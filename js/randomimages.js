const myButton = document.querySelector(`button`);
const image = document.querySelector(`img`);
const images = ["pildike1.jpg", "pildike2.webp", "pildike3.jpg", "pildike4.jpg"];

myButton.addEventListener(`click`,changeImage);

function changeImage(){

    let randomIndex = Math.floor(Math.random()* images.length);
    image.src = "images/" + images[randomIndex];

}
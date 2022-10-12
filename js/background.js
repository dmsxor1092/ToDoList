const images = ["bi0", "bi1", "bi2"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("body");

//bgImage.src = `img/${chosenImage}`;

bgImage.className = chosenImage;
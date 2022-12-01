const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const nameCars = document.querySelector("#nameCar");
const imageCars = document.querySelector("#imageCars");

const arrayImageCars = [
  "../assets/left-arrow.png",
  "../assets/right-arrow.png",
];
const arrayNameCars = ["Arthur", "PEDRO"];

let counter = 0;

const checkCounter = () => {
  if (counter === arrayImageCars.length) {
    counter = 0;
  } else if (counter === -1) {
    counter = arrayImageCars.length - 1;
  }
};

rightArrow.addEventListener("click", () => {
  counter++;
  checkCounter();
  imageCars.src = arrayImageCars[counter];
  nameCars.textContent = arrayImageCars[counter];
});

leftArrow.addEventListener("click", () => {
  counter--;
  checkCounter();
  imageCars.src = arrayImageCars[counter];
  nameCars.textContent = arrayImageCars[counter];
});

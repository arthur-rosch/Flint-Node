const ImageCar = document.querySelector("#imageCars");
const NameCar = document.querySelector("#nameCar");

const LeftArrow = document.querySelector("#leftArrow");
const RightArrow = document.querySelector("#rightArrow");

fetch("../cars.json")
  .then((data) => {
    return data.json();
  })
  .then((post) => {
    const JSONCars = post;
    let Counter = 0;

    UpdateDisplay(Counter);

    RightArrow.addEventListener("click", (e) => {
      Counter >= 4 ? (Counter = 0) : Counter++;
      UpdateDisplay(Counter);
    });

    LeftArrow.addEventListener("click", (e) => {
      Counter == 0 ? (Counter = 4) : Counter--;
      UpdateDisplay(Counter);
    });

    function UpdateDisplay(Counter) {
      ImageCar.src = JSONCars[Counter].photo;
      NameCar.textContent = JSONCars[Counter].model;
    }
  });

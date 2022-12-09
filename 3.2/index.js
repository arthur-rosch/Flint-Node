const brand = document.querySelector("#brand");
const model = document.querySelector("#model");
const year = document.querySelector("#year");
const color = document.querySelector("#color");
const auto = document.querySelector("#auto");
const submit = document.querySelector("#submit");

let listCar = [];
class Car {
  Brand;
  Model;
  Year;
  Color;
  Auto;
  constructor(brand, model, year, color, auto) {
    this.Brand = brand;
    this.Model = model;
    this.Year = year;
    this.Color = color;
    this.Auto = auto;
  }
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const newCar = new Car(
    brand.value,
    model.value,
    year.value,
    color.value,
    auto.value
  );
  brand.value = "";
  model.value = "";
  year.value = "";
  color.value = "";
});

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
  listCar.push(newCar);
  brand.value = "";
  model.value = "";
  year.value = "";
  color.value = "";
});
function searchByBrand(brandName, arrayOfCars) {
  let searchedBrandsList = [];
  arrayOfCars.forEach((element) => {
    element.Brand === brandName
      ? searchedBrandsList.push(element)
      : console.log("Essa Marca não tem em nosso estoque");
  });
}
function brandsAvailable(arrayOfCars) {
  let brandsAvailable = arrayOfCars.filter((a, i) => {
    arr.indexOf(a) === i;
  });
  return brandsAvailable;
}
function ShowProperties(array, arrayStrings) {
  let ListOfCarsProperties = [];

  array.forEach((item) => {
    let newObject = {};
    arrayStrings.forEach((string) => {
      switch (string) {
        case "Brand":
          const Brand = item[string];
          newObject.Brand = Brand;
          break;

        case "Model":
          const Model = item[string];
          newObject.Model = Model;
          break;

        case "Year":
          const Year = item[string];
          newObject.Year = Year;
          break;

        case "Value":
          const Value = item[string];
          newObject.Value = Value;
          break;

        case "Color":
          const Color = item[string];
          newObject.Color = Color;
          break;
      }
    });
    ListOfCarsProperties.push(newObject);
  });
  return ListOfCarsProperties;
}

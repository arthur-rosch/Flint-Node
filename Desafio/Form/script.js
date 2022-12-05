const brand = document.querySelector("#brand");
const model = document.querySelector("#model");
const year = document.querySelector("#year");
const plaque = document.querySelector("#plaque");
const color = document.querySelector("#color");
const photo = document.querySelector("#photo");
const submit = document.querySelector("#submit");

submit.addEventListener("click", (a) => {
  a.preventDefault();

  const newCar = {
    brand: brand.value,
    model: model.value,
    year: year.value,
    plaque: plaque.value,
    color: color.value,
    photo: photo.value,
  };
  fetch("https://apigenerator.dronahq.com/api/QbdXhibA/rosch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCar),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success", data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
});

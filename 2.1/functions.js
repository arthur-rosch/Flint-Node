function expensesForATrip(distance, fuel) {
  let kmPerLiter = 0;
  distance = distance / 1000;

  fuel === "gasoline" && (kmPerLiter = 16);
  fuel === "ethanol" && (kmPerLiter = 11);

  return Math.round(distance / kmPerLiter);
}

function numberOfStops(passengerList, timeOfTravel) {
  let stops = 0,
    adults = 0,
    children = 0;

  passengerList.forEach((element) => {
    element === "adult" && adults++;
    element === "children" && children++;
  });

  children === 0 && (stops = 90);
  children > 0 && (stops = 60);
  children > adults && (stops = 40);

  return timeOfTravel / stops;
}

function expensesPerMeal(numberOfStops, passengerList) {
  let valueOfMeals = 0;
  let adultos = 0,
    crianças = 0;

  passengerList.forEach((element) => {
    element === "adult" && adultos++;
    element === "children" && crianças++;
  });

  valueOfMeals = adultos * 50 + crianças * 40;

  for (let index = 0; index < numberOfStops; index++) {
    if (index % 2 === 0 && index > 0) {
      valueOfMeals += adultos * 50 + crianças * 40;
    }

    if (index % 2 !== 0) {
      valueOfMeals += adultos * 30 + crianças * 20;
    }
  }

  return valueOfMeals;
}
let array = ["adult", "children"];
console.log(expensesPerMeal(5, array));

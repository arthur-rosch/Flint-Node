function expensesForATrip(distance, fuel) {
  let kmPerLiter = 0;
  distance = distance / 1000;

  fuel === "gasoline" && (kmPerLiter = 16);
  fuel === "ethanol" && (kmPerLiter = 11);

  return Math.round(distance / kmPerLiter);
}
function countingAdults(passengerList) {
  let adultCounter = 0;
  passengerList.forEach((element) => {
    element === "adult" && adultCounter++;
  });
  return adultCounter;
}
function countingChildren(passengerList) {
  let childrenCounter = 0;
  passengerList.forEach((element) => {
    element === "children" && childrenCounter++;
  });
  return childrenCounter;
}
function numberOfStops(passengerList, timeOfTravel) {
  let stops = 0,
    adults = countingAdults(passengerList),
    children = countingChildren(passengerList);

  children === 0 && (stops = 90);
  children > 0 && (stops = 60);
  children > adults && (stops = 40);

  return timeOfTravel / stops;
}
function expensesPerMeal(numberOfStops, passengerList) {
  let valueOfMeals = 0,
    adults = countingAdults(passengerList),
    children = countingChildren(passengerList);

  valueOfMeals = adults * 50 + children * 40;

  for (let index = 0; index < numberOfStops; index++) {
    if (index % 2 === 0 && index > 0) {
      valueOfMeals += adults * 50 + children * 40;
    }

    if (index % 2 !== 0) {
      valueOfMeals += adults * 30 + children * 20;
    }
  }

  return valueOfMeals;
}
let array = ["adult", "children"];
console.log(expensesPerMeal(5, array));

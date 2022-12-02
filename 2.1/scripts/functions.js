function expensesForATrip(distance, fuel) {
  if (distance < 0 || Number.isInteger(distance) === false) {
    console.log("Passe como Parâmetros Números Positivo como Distancia ");
  }
  if (fuel !== "gasoline" && fuel !== "ethanol") {
    console.log("Passe como Parâmetros Combustível Valido ");
  } else {
    let kmPerLiter = 0;
    distance = distance / 1000;

    fuel === "gasoline" && (kmPerLiter = 16);
    fuel === "ethanol" && (kmPerLiter = 11);

    return Math.round(distance / kmPerLiter);
  }
}
function countingAdults(passengerList) {
  if (passengerList.includes("adults") == false) {
    console.log(
      "Dentro Array Não Existe Nenhum Adulto,Não conseguir contabilizar os adultos"
    );
    return 0;
  }
  if (passengerList.includes(null) || passengerList.includes(undefined)) {
    console.log("Valores como Null ou Undefined não são validos");
  } else {
    let adultCounter = 0;
    passengerList.forEach((element) => {
      element === "adult" && adultCounter++;
    });
    return adultCounter;
  }
}
function countingChildren(passengerList) {
  if (passengerList.includes("children") == false) {
    console.log(
      "Dentro Array Não Existe Nenhuma Criança,Não conseguir contabilizar as crianças"
    );
    return 0;
  }
  if (passengerList.includes(null) || passengerList.includes(undefined)) {
    console.log("Valores como Null ou Undefined não são validos");
  } else {
    let childrenCounter = 0;
    passengerList.forEach((element) => {
      element === "children" && childrenCounter++;
    });
    return childrenCounter;
  }
}
function numberOfStops(passengerList, timeOfTravel) {
  if (Number.isInteger(timeOfTravel) === false || timeOfTravel > 0) {
    let stops = 0,
      adults = countingAdults(passengerList),
      children = countingChildren(passengerList);

    children === 0 && (stops = 90);
    children > 0 && (stops = 60);
    children > adults && (stops = 40);

    return (timeOfTravel * 60) / stops;
  } else {
    console.log("O Tempo de viagem deve ser maior que 0 e um numero Float");
  }
}
function expensesPerMeal(numberOfStops, passengerList) {
  if (numberOfStops < 0 && Number.isInteger(numberOfStops) === false) {
    console.log("O Numero de paradas deve ser maior que 0 e Inteiro");
  } else {
    let valueOfMeals = 0,
      adults = countingAdults(passengerList),
      children = countingChildren(passengerList);

    for (let index = 1; index < numberOfStops; index++) {
      if (index === 1) {
        valueOfMeals += adults * 50 + children * 40;
      } else {
        if (index % 2 === 0 && index > 0) {
          valueOfMeals += adults * 50 + children * 40;
        }

        if (index % 2 !== 0) {
          valueOfMeals += adults * 30 + children * 20;
        }
      }
    }
    return valueOfMeals;
  }
}

module.exports(
  expensesForATrip,
  countingAdults,
  countingChildren,
  numberOfStops,
  expensesPerMeal
);

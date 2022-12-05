const numberButtons = document.querySelectorAll("#buttonDefault");
const operatorButtons = document.querySelectorAll("#buttonOperator");
const equalsButton = document.querySelector("#buttonEquals");
const deleteButton = document.querySelector("#buttonDelete");
const previusTextValue = document.querySelector("#valorAnterior");
const currentTextValue = document.querySelector("#valorAtual");
const clearButton = document.querySelector("#botaoLimpar");

class Calculator {
  constructor(previusTextValue, currentTextValue) {
    this.previusTextValue = previusTextValue;
    this.currentTextValue = currentTextValue;
    this.Clear();
  }

  Clear() {
    this.currentValue = "";
    this.valuePrevious = "";
    return (this.operation = undefined);
  }

  Update() {
    this.previusTextValue.innerText = `${this.valuePrevious} ${
      this.operation || ""
    }`;
    this.currentTextValue.innerText = this.currentValue;
  }

  AddNumber(number) {
    if (this.currentValue.includes(".") && number === ".") return;

    this.currentValue = `${this.currentValue}${number.toString()}`;
  }

  Operator(operation) {
    if (this.valuePrevious !== "") {
      this.Calculate();
    }
    this.operation = operation;

    this.valuePrevious = this.currentValue;
    this.currentValue = "";
  }

  Calculate() {
    let result;

    const valuePreviousParse = parseFloat(this.valuePrevious);
    const currentValueParse = parseFloat(this.currentValue);

    if (isNaN(valuePreviousParse) || isNaN(currentValueParse)) return;

    switch (this.operation) {
      case "+":
        result = valuePreviousParse + currentValueParse;
        break;

      case "-":
        result = valuePreviousParse - currentValueParse;
        break;

      case "*":
        result = valuePreviousParse * currentValueParse;
        break;

      case "÷":
        result = valuePreviousParse / currentValueParse;
        break;

      default:
        return;
    }
    this.currentValue = result;
    this.operation = undefined;
    this.valuePrevious = "";
  }

  Delete() {
    this.currentValue = "";
  }
}

const NewCalculator = new Calculator(previusTextValue, currentTextValue);

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    NewCalculator.AddNumber(numberButton.innerText);
    NewCalculator.Update();
  });
}

for (const operationChoose of operatorButtons) {
  operationChoose.addEventListener("click", () => {
    NewCalculator.Operator(operationChoose.innerText);
    NewCalculator.Update();
  });
}

clearButton.addEventListener("click", () => {
  NewCalculator.Clear();
  NewCalculator.Update();
});

equalsButton.addEventListener("click", () => {
  NewCalculator.Calculate();
  NewCalculator.Update();
});

deleteButton.addEventListener("click", () => {
  NewCalculator.Delete();
  NewCalculator.Update();
});

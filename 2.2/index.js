function Clear() {
  this.currentValue = "";
  this.valuePrevious = "";
  return (this.operation = undefined);
}

function Update() {
  if (
    this.previusTextValue !== undefined ||
    this.currentTextValue !== undefined
  ) {
    return undefined;
  }
  this.previusTextValue = `${this.valuePrevious} ${this.operation || ""}`;
  this.currentTextValue = this.currentValue;
}

function AddNumber(number) {
  if (this.currentValue.includes(".") && number === ".") return;

  this.currentValue = `${this.currentValue}${number.toString()}`;
  return true;
}

function Operator(operation) {
  if (this.valuePrevious !== "") {
    this.Calculate();
  }
  this.operation = operation;

  this.valuePrevious = this.currentValue;
  this.currentValue = "";
  return true;
}

function Calculate() {
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

function Delete() {
  this.currentValue = "";
}

module.exports = { Clear, Update, AddNumber, Operator, Calculate, Delete };

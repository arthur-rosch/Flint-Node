const script = require("./index.js");

test("clear all calculations", () => {
  expect(script.Clear()).toBe(undefined);
});

test("Update screen values", () => {
  expect(script.Update()).toBe();
});

test("Adds a number", () => {
  expect(script.AddNumber(5)).toBe(true);
});

test("Determines the operation", () => {
  expect(script.Operator("+")).toBe(true);
});

test("Validate operation and perform calculation", () => {
  expect(script.Calculate()).toBe();
});

test("Delete current number", () => {
  expect(script.Delete()).toBe();
});

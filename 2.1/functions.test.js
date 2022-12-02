const functions = require("./functions");

test("Returning int number", () => {
  expect(functions.expensesForATrip(50000, "gasoline")).toBe(3);
});
test("Return number of adults", () => {
  expect(functions.countingAdults(["adult"])).toBe(1);
});
test("Return number of children", () => {
  expect(functions.countingChildren(["children"])).toBe(1);
});
test("Correct number of stops", () => {
  expect(functions.numberOfStops(["children", "adult"], 6.5)).toBe(7);
});
test("Spent on food", () => {
  expect(
    functions.expensesPerMeal(
      ["adult"],
      functions.numberOfStops(["adult"], 6.5)
    )
  ).toBe(160);
});

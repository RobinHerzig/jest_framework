const square = require("./square");
const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

test("squares input to equal 16", () => {
  expect(square(input)).toBe(16);
});

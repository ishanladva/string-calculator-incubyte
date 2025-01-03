import { calculator } from "../src/index";

it("should return 0 for an empty string", () => {
  expect(calculator("")).toBe(0);
});

it("should return the number for a single number input", () => {
  expect(calculator("1")).toBe(1);
});

it("should return the sum of two numbers", () => {
  expect(calculator("1,2,3")).toBe(6);
});

it("should handle new lines as delimiters", () => {
  expect(calculator("1\n2,3")).toBe(6);
});

it("should support custom delimiters", () => {
  expect(calculator("//;\n1;2;3")).toBe(6);
});

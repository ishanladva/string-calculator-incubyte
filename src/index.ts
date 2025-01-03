export function calculator(input: string): number {
  if (!input) return 0;

  const numbers = input.split(",").map((num) => parseInt(num));
  return numbers
    .filter((num) => num <= 1000)
    .reduce((sum, acc) => sum + acc, 0);
}

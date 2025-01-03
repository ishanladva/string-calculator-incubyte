export function calculator(input: string): number {
  if (!input) return 0;

  let delimiters = /,|\n/;

  const numbers = input.split(delimiters).map((num) => parseInt(num));
  return numbers
    .filter((num) => num <= 1000)
    .reduce((sum, acc) => sum + acc, 0);
}

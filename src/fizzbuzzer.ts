export function fizzBuzz(input: number): string {
  if (isDivisibleBy3and5(input)) return `FizzBuzz`;
  if (isDivisibleBy3(input)) return `Fizz`;
  if (isDivisibleBy5(input)) return `Buzz`;
  return `${input}`;
}

function isDivisibleBy3(input: number): boolean {
  return isDivisibleBy(input, 3);
}

function isDivisibleBy5(input: number): boolean {
  return isDivisibleBy(input, 5);
}

function isDivisibleBy3and5(input: number): boolean {
  return isDivisibleBy3(input) && isDivisibleBy5(input);
}

function isDivisibleBy(input: number, divisor: number): boolean {
  return input % divisor === 0;
}

import { fizzBuzz } from '../fizzbuzzer';

/**
 * Write a program that prints one line for each number from 1 to 100
 * For multiples of three print Fizz instead of the number
 * For the multiples of five print Buzz instead of the number
 * For numbers which are multiples of both three and five print FizzBuzz instead of the number
 */
describe('fizzbuzzer', () => {
  describe('fizzbuzzer#fizzbuzz()', () => {
    it('should return number in string when number cannot be divided by 3 or 5', () => {
      // Given
      // When
      // Then
      expect(fizzBuzz(1)).toBe('1');
      expect(fizzBuzz(2)).toBe('2');
      expect(fizzBuzz(4)).toBe('4');
      expect(fizzBuzz(7)).toBe('7');
      expect(fizzBuzz(8)).toBe('8');
      expect(fizzBuzz(11)).toBe('11');
      expect(fizzBuzz(13)).toBe('13');
      expect(fizzBuzz(14)).toBe('14');
    });

    it('should return "Fizz" when number can be divided by 3', () => {
      // Given
      // When
      // Then
      expect(fizzBuzz(3)).toBe('Fizz');
      expect(fizzBuzz(6)).toBe('Fizz');
      expect(fizzBuzz(9)).toBe('Fizz');
      expect(fizzBuzz(12)).toBe('Fizz');
      expect(fizzBuzz(51)).toBe('Fizz');
      expect(fizzBuzz(24)).toBe('Fizz');
      expect(fizzBuzz(81)).toBe('Fizz');
    });
    it('should return "Buzz" when number can be divided by 5', () => {
      // Given
      // When
      // Then
      expect(fizzBuzz(5)).toBe('Buzz');
      expect(fizzBuzz(10)).toBe('Buzz');
      expect(fizzBuzz(20)).toBe('Buzz');
      expect(fizzBuzz(70)).toBe('Buzz');
      expect(fizzBuzz(95)).toBe('Buzz');
    });
    it('should return "FizzBuzz" when number can be divided by 3 and 5', () => {
      // Given
      // When
      // Then
      expect(fizzBuzz(15)).toBe('FizzBuzz');
      expect(fizzBuzz(30)).toBe('FizzBuzz');
      expect(fizzBuzz(45)).toBe('FizzBuzz');
      expect(fizzBuzz(60)).toBe('FizzBuzz');
      expect(fizzBuzz(75)).toBe('FizzBuzz');
    });
  });
});

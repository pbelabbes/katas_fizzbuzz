import * as fizzbuzzer from '../fizzbuzzer';

describe('fizzbuzzer', () => {
  describe('fizzbuzzer#fizzbuzz()', () => {
    it('should return a message', () => {
      const message = fizzbuzzer.fizzbuzz();
      expect(message).toEqual('Hello world!');
    });
  });
});

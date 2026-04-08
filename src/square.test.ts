import { squareWithFor, squareWithForEach } from './square.js';

const testArray = [3, 5, 7, 3, 8, 9, 1];
const expected = [9, 25, 49, 9, 64, 81, 1];

test('calcula quadrado com for simples', () => {
  expect(squareWithFor(testArray)).toEqual(expected);
});

test('calcula quadrado com forEach', () => {
  expect(squareWithForEach(testArray)).toEqual(expected);
});
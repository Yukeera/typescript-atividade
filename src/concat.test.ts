import { concatenateStrings, concatenateWithTransform } from './concat.js';

const testArray = ['Arrays', 'com', 'TypeScript'];
const expected = 'Arrays com TypeScript';

test('concatena strings com espaço - teste principal', () => {
  expect(concatenateStrings(testArray)).toEqual(expected);
});

test('concatena array vazio', () => {
  expect(concatenateStrings([])).toEqual('');
});

test('concatena array com uma string', () => {
  expect(concatenateStrings(['TypeScript'])).toEqual('TypeScript');
});

test('concatena com transformação - uppercase', () => {
  expect(concatenateWithTransform(testArray, (str) => str.toUpperCase())).toEqual('ARRAYS COM TYPESCRIPT');
});

test('concatena com transformação padrão', () => {
  expect(concatenateWithTransform(testArray)).toEqual(expected);
});

test('concatena com transformação - lowercase', () => {
  expect(concatenateWithTransform(testArray, (str) => str.toLowerCase())).toEqual('arrays com typescript');
});

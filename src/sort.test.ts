import { sort } from './sort.js';

test('sorts array in descending order', () => {
  expect(sort(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['lapis', 'carro', 'boneco', 'ave']);
});

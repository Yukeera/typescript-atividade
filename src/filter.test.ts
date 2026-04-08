import { filter } from './filter.js';

test('Filtro para pegar apenas pares', () => {
  expect(filter([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});

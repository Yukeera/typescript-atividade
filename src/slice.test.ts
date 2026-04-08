import { slice } from './slice.js';

test('slices array to get only the first two elements', () => {
  expect(slice([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
});

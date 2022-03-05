const sym = require('../../Algorithms/FindTheSymmetricDifference');
test('[1, 2, 3], [5, 2, 1, 4] to [3, 4, 5]', () => {
  expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
});

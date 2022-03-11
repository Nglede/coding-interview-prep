const sym = require('../../Algorithms/FindTheSymmetricDifference');

const doArraysIntersect =
(array1, array2) => array1.some((item1) => array2.includes(item1));

test('[1, 2, 3], [5, 2, 1, 4] to [3, 4, 5]', () => {
  expect(doArraysIntersect(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5])).toBe(true);
});

/**
 * @param  {number[]} args
 * @return {number[]}
 */

function sym(...args) {
  console.log(args);
  const aaa = [3, 4, 5];
  return aaa;
}

sym([1, 2, 3], [5, 2, 1, 4]);

module.exports = sym;

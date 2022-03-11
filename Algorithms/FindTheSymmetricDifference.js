/**
 * A = {1, 2, 3}
 * B = {2, 3, 4}
 * A △ B = {1, 4}
 * C = {2, 3}
 * A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}
 */

// // Solution 3
// /**
//  * 数组对称差
//  * @date 2022-03-11
//  * @param {number[]} arr1
//  * @param {number[]} arr2
//  * @return {number[]}
//  */
// const diff = (arr1, arr2) => [
//   ...arr1.filter((item) => !arr2.includes(item)),
//   ...arr2.filter((item) => !arr1.includes(item)),
// ];

// /**
//  * 对称差集
//  * @date 2022-03-11
//  * @param {Array<Array<number>>} ...args
//  * @return {number[]}
//  */
// const sym = (...args) => [...new Set(args.reduce(diff))];

// /**
//  * 描述
//  * @date 2022-03-13
//  * @param {any} ...args
//  * @return {any}
//  */
// function sym(...args) {
//   return [...args.reduce(reducer, new Set())];
// }

// /**
//  * 描述
//  * @date 2022-03-13
//  * @param {any} result
//  * @param {any} arr
//  * @return {any}
//  */
// function reducer(result, arr) {
//   const compare = new Set(arr);
//   for (const val of compare) {
//       result.has(val) ? result.delete(val) : result.add(val);
//   }
//   return result;
// }

/**
 * 描述
 * @date 2022-03-13
 * @param {any} args
 * @return {any}
 */
function sym(...args) {
  const arr = [...args];
  const res = new Set([...arr[0]]);
  for (let i = 1; i < arr.length; i++) {
    const temp = new Set([...arr[i]]);
    for (const val of temp) {
      res.has(val) ? res.delete(val) : res.add(val);
    }
  }
  return [...res];
}

module.exports = sym;

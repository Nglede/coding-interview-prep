/**
 * Inventory Update
 * @date 2022-03-13
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @return {any[]}
 */
function updateInventory(arr1, arr2) {
  const allList = [...arr1, ...arr2];
  const nameList = new Set();
  const res = [];
  for (const item of allList) {
    // eslint-disable-next-line no-unused-vars
    const [_, name] = item;
    nameList.add(name);
  }

  for (const name of nameList) {
    const num1 = getNum(arr1, name);
    const num2 = getNum(arr2, name);
    const num = num1 + num2;
    res.push([num, name]);
  }
  return res.sort((a, b) => a[1] > b[1] ? 1 : -1);
}

/**
   * 描述
   * @date 2022-03-13
   * @param {any[]} arr
   * @param {string} name
   * @return {number}
   */
const getNum = (arr, name) => {
  let res = 0;
  arr.forEach((item) => {
    res = item[1] === name ? item[0] : res;
  });
  return res;
};

module.exports = updateInventory;

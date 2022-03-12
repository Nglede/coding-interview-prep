const updateInventory = require('../../Algorithms/InventoryUpdate');

const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

test('\'[[ 88, \'Bowling Ball\' ],'+
'[ 2, \'Dirty Sock\' ],' +
'[ 3, \'Hair Pin\' ],'+
'[ 3, \'Half-Eaten Apple\' ],'+
'[ 5, \'Microphone\' ],[ 7, \'Toothpaste\' ]]\'',
()=>{
  expect(updateInventory(curInv, newInv)).toEqual([
    [88, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [3, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [5, 'Microphone'],
    [7, 'Toothpaste'],
  ]);
});

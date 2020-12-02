import { inputToArray } from '../utils/readInput.mjs';

const expenses = inputToArray('day1/input.txt');

function findSum(sum, list) {
  const length = list.length;
  let pair = [];
  list.forEach((a, index) => {
    const next = index + 1;
    if (next >= length) {
      return false;
    }

    const newList = list.slice(index + 1);
    newList.forEach((b) => {
      if (a + b == sum) {
        pair = [a, b];
      }
    });
  });

  if (!pair.length) {
    return;
  }

  return pair[0] * pair[1];
}

console.log(findSum(2020, expenses));

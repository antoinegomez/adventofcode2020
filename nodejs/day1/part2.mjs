import { inputToArray } from '../utils/readInput.mjs';

/**
 * it works but meh
 */

const expenses = inputToArray('nodejs/day1/input.txt');

function findSum(sum, list) {
  const length = list.length;
  let pair = [];
  list.forEach((a, index) => {
    const next = index + 1;
    if (next >= length) {
      return false;
    }

    const sub1 = list.slice(index + 1);
    sub1.forEach((b, subIndex) => {
      const subNext = subIndex + 1;
      const sub2 = sub1.slice(subNext);
      sub2.forEach((c) => {
        if (a + b + c == sum) {
          pair = [a, b, c];
        }
      });
    });
  });

  if (!pair.length) {
    return;
  }

  return pair[0] * pair[1] * pair[2];
}

console.log(findSum(2020, expenses));

import { inputToArray } from '../utils/readInput.mjs';

function decodeLine(line) {
  return String(line).trim();
}

function countTrees(lines) {
  let index = 0;
  return lines.slice(1).reduce((total, line) => {
    index += 3;

    if (index > line.length - 1) {
      index = index - line.length;
    }

    if (line[index] == "#") {
      return total + 1;
    }

    return total;
  }, 0);
}

console.log(countTrees(inputToArray('nodejs/day3/input.txt', decodeLine)));


import { inputToArray } from '../utils/readInput.mjs';

function decodeLine(line) {
  return String(line).trim();
}

function countTrees(lines, right = 3, down = 1) {
  let index = 0;
  return lines.slice(down).reduce((total, line, lineIndex) => {
    if (lineIndex % down !== 0) {
      return total;
    }

    index += right;

    if (index > line.length - 1) {
      index = index - line.length;
    }

    if (line[index] == "#") {
      return total + 1;
    }

    return total;
  }, 0);
}

function calculateSlopes(input) {
  const world = inputToArray('nodejs/day3/input.txt', decodeLine);
  return input.reduce((total, [right, down]) => total * countTrees(world, right, down), 1);
}

console.log(calculateSlopes([
  [1,1],
  [3,1],
  [5,1],
  [7,1],
  [1,2]
]));


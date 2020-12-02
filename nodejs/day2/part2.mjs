import { inputToArray } from '../utils/readInput.mjs';

function decodeLine(line) {
  const [policy, letter, password] = line.replace(/:/, '').split(' ');

  return {
    policy, letter, password,
  };
}

function policyToPattern(policy, letter) {
  return new RegExp(`${letter}{${policy.replace(/-/, ',')}}`);
}

function cleanPassword(password, letter) {
  const regex = new RegExp(`[^${letter}]`, 'g');
  return password.replace(regex, '');
}

function arrayPositionVerify({ policy, letter, password }) {
  const positions = policy.split('-');
  return positions.filter((position) => {
    return password[position - 1] === letter
  }).length === 1;
}

function countCorrectPasswords(passwords) {
  return passwords.filter(arrayPositionVerify).length;
}

console.log(countCorrectPasswords(inputToArray('nodejs/day2/input.txt', decodeLine)));

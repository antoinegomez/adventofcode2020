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

// was giving a to high number
function regexVerify({ policy, letter, password }) {
  const regex = policyToPattern(policy, letter);
  return !!regex.exec(cleanPassword(password, letter));
}

function arrayCountVerify({ policy, letter, password }) {
  const length = cleanPassword(password, letter).split('').length;
  const [min,max] = policy.split('-');
  return length >= min && length <= max;
}

function countCorrectPasswords(passwords) {
  return passwords.filter(arrayCountVerify).length;
}

console.log(countCorrectPasswords(inputToArray('nodejs/day2/input.txt', decodeLine)));

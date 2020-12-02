import { readFileSync } from 'fs';

export function inputToArray(pathname, format = Number) {
  console.log(pathname);
  return readFileSync(pathname).toString().split('\n').map(item => format(item.trim()));
}

import { readFileSync } from 'fs';

export function inputToArray(pathname, format = Number) {
  return readFileSync(pathname).toString().split('\n').filter(Boolean).map(item => format(item.trim()));
}

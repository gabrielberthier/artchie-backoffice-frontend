import { setCharAt } from "./set-char-at";

/**
 *
 * @param {string} str
 */
export function capitalize(str) {
  return setCharAt(0, str[0].toUpperCase(), str);
}

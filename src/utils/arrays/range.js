/**
 *
 * @param {number} start
 * @param {number} end
 *
 * @returns {number[]}
 */
export function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

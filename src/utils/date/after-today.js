/**
 *
 * @param {string} day
 *
 * @returns {boolean}
 */
export function afterToday(day) {
  if (day) {
    const parts = day.split("/");
    if (parts.length === 3) {
      const date = new Date(parts[2], parts[1], parts[0]);
      const today = new Date();
      return date.getTime() > today.getTime();
    }
  }
  return false;
}

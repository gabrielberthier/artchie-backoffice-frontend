/**
 *  Receives a date object and transforms it in a string formatted as dd-mm-yyyy
 * @param {Date} date
 * @returns {string}
 */
export const dateConverter = (date) => {
  try {
    const d = date;
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    return `${day}-${month}-${year}`;
  } catch (error) {
    return null;
  }
};

/**
 *  Receives a date object and transforms it in a string formatted as dd-mm-yyyy
 * @param {string} date
 * @returns {string|undefined}
 */
export const ISO8601Format = (date) => {
  if (date) {
    const parts = date.split("-");
    if (Array.isArray(parts) && parts.length === 3) {
      parts[0]++;
      return parts.reverse().join("-");
    }
  }
};

export const createDateObjectFromDateString = (strDate) => {
  const arrayValues = strDate.split("-").map((el) => parseInt(el));
  const dateFromArray = new Date(
    arrayValues[0],
    --arrayValues[1],
    arrayValues[2]
  );
  return dateFromArray;
};

export const createDateObjectFromISOString = (strDate) => {
  const arrayValues = strDate.split("/").map((el) => parseInt(el));
  const dateFromArray = new Date(
    arrayValues[0],
    --arrayValues[1],
    arrayValues[2]
  );
  return dateFromArray;
};

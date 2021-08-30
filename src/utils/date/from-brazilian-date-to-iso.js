export const convertFromDateBrazilToISO = (strDate) => {
  return strDate
    .split("/")
    .reverse()
    .join("-");
};

export function convertMoneyBR(str) {
  const regex = /(R\$\s)|(,)/gm;
  const subst = "";

  // The substituted value will be contained in the result variable
  const result = str.replace(regex, subst);

  return result;
}

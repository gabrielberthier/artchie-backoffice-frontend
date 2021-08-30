/**
 * @function validateStringName
 * @param {string} name
 *
 * @returns {boolean}
 */
export const validateStringName = (name) => {
  const isValid = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+(\s{0,1}[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ])*$/.test(
    name
  );

  return isValid;
};

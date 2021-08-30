/**
 * @function passwordMatchesRequirements
 * @param {string} password
 *
 * @returns {boolean}
 */
export const passwordMatchesRequirements = (password) => {
  const regex = /^(?=.*[a-z])(?=.*\d{2})(?=.*[!@#$%^&*(),.?":{}|<>~\\])[a-zA-Z\d\w\W!@#$%^&*(),.?":{}|<>~\\]{6,}$/gm;
  const isValid = regex.test(password);

  return isValid;
};

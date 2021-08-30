export const over18 = (age) => {
  if (age) {
    const parts = age.split("-");
    if (parts.length === 3) {
      const date = new Date(parts[2], parts[1], parts[0]);
      const then = new Date();
      then.setFullYear(then.getFullYear() - 18);
      return date.getTime() < then.getTime();
    }
  }
  return false;
};

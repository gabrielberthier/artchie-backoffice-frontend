import { validate } from "gerador-validador-cpf";

export const isValidCPF = (cpf) => {
  if (cpf && cpf.length < 11) return false;
  return validate(cpf);
};

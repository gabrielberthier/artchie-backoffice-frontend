export class Response {
  constructor(_data = {}, _statusText = "OK", _code = 200) {
    this.data = _data;
    this.statusCode = _code;
    this.statusText = _statusText;
  }
}

/**
 *
 * @param {Error} error
 * @returns {Response}
 */
export const errorFor = (error, statusCode, statusText) => {
  const data = error.message;
  return new Response(data, statusText, statusCode);
};

/**
 *
 * @param {object} data
 * @returns {Response}
 */
export const success = (status, data) => {
  if (status === 200) return ok(data);
  return new Response(data, status, status);
};

/**
 *
 * @param {object} data
 * @returns {Response}
 */
export const ok = (data) => {
  return new Response(data);
};

/**
 *
 * @param {object} data
 * @returns {Response}
 */
export const unprocessableEntity = (data) => {
  const statusText =
    "Não é possível processar a requisição. " +
    "Um ou mais campos podem estar inválidos " +
    "ou  a requisição pode estar em formato errado";
  return new Response(data.error?.description, statusText, 422);
};

/**
 *
 * @param {object} data
 * @returns {Response}
 */
export const badRequest = (data) => {
  let reason = data.message || data.msg || data;
  data.msg = reason;
  const statusText = `Bad Request. Motivo: ${reason}`;
  return new Response(data, statusText, 400);
};

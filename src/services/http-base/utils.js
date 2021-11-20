/**
 *
 * @param {import('./responses').Response} response
 */
export function isSuccessfulResponse(response) {
  return response.statusCode >= 200 && response.statusCode < 300;
}

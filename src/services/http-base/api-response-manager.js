import { client, failResponseHandler } from "./index";
import { success } from "./response";

/**
 *
 * @param {string} path
 * @param {Number} page
 * @param {Number|null} limit
 * @param {Object|null} extraParams
 *
 * @returns {import('./response').Response}
 */
export const makeSelection = async (
  path,
  page = 1,
  limit = 10,
  extraParams = {}
) => {
  try {
    const params = { page, limit, ...extraParams };
    const { data, status } = await client.get(path, { params });
    return success(status, data);
  } catch (error) {
    return failResponseHandler(error.response.status, error.response.data);
  }
};

/**
 *
 * @param {string} path
 * @param {object} payload
 * @param {object|null} fields
 *
 * @returns {import('./response').Response}
 */
export const makePostRequest = async (path, payload, fields = null) => {
  try {
    const { data, status } = await client.post(path, payload);
    if (status >= 200 && status < 300) {
      if (fields) {
        const bag = {};
        Object.keys(fields).forEach((f) => {
          if (data[f]) bag[f] = data[f];
        });
        return success(status, bag);
      }
      return success(status, data);
    }
    return failResponseHandler(status, data);
  } catch (error) {
    return failResponseHandler(status, error.response.data);
  }
};

/**
 *
 * @param {string} path
 * @param {number} id
 *
 * @returns {import('./response').Response}
 */
export const makeDeletionRequest = async (path, id) => {
  const { data, status } = await client.delete(`${path}/${id}`);
  if (status >= 200 && status < 300) {
    return success(status, data);
  }
  return failResponseHandler(status, data);
};

export const makePutRequest = async (path, id, payload, fields = null) => {
  try {
    const { data, status } = await client.put(`${path}/${id}`, payload);
    if (status >= 200 && status < 300) {
      if (fields) {
        const bag = {};
        Object.keys(fields).forEach((f) => {
          if (data[f]) bag[f] = data[f];
        });
        return success(status, bag);
      }
      return success(status, data);
    }
    return failResponseHandler(status, data);
  } catch (error) {
    return failResponseHandler(status, error.response.data);
  }
};

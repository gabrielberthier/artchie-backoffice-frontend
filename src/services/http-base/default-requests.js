import { api } from "src/boot/axios";
import { failResponseHandler } from "./index";
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

    const { data, status } = await api.get(path, { params });

    return success(status, data);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return failResponseHandler(error.response.status, error.response.data);
    } else if (error.request) {
      /**
       * @type { XMLHttpRequest  }
       */
      const requestError = error.request;
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return failResponseHandler(requestError.status, requestError.statusText);
    } else {
      console.log("Error", error.message);
      return failResponseHandler(null, error.message);
    }
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
    const { data, status } = await api.post(path, payload);
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
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return failResponseHandler(error.response.status, error.response.data);
    } else if (error.request) {
      /**
       * @type { XMLHttpRequest  }
       */
      const requestError = error.request;
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return failResponseHandler(requestError.status, requestError.statusText);
    } else {
      console.log("Error", error.message);
      return failResponseHandler(null, error.message);
    }
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
  const { data, status } = await api.delete(`${path}/${id}`);
  if (status >= 200 && status < 300) {
    return success(status, data);
  }
  return failResponseHandler(status, data);
};

export const makePutRequest = async (path, id, payload, fields = null) => {
  try {
    const { data, status } = await api.put(`${path}/${id}`, payload);
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

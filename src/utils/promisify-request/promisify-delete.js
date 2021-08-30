import { makeDeletionRequest } from "@/services/http-base";

/**
 *
 * @param {number} id
 * @param {string} path
 *
 * @returns {Promise}
 */
export const callbackForDeletion = async (id, path) => {
  return new Promise((resolve, reject) => {
    makeDeletionRequest(path, id)
      .then((response) => {
        const { statusCode, data } = response;
        if (statusCode >= 200 && statusCode < 300) {
          return resolve(data);
        }
      })
      .catch((error) => reject(error));
  });
};

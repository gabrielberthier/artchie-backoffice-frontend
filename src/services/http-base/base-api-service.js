import { api } from "src/boot/axios";
import {
  badRequest,
  success,
  unprocessableEntity,
  Response,
} from "./responses";

export default class BaseApiService {
  resource;

  constructor(resource) {
    if (!resource) throw new Error("Resource is not provided");
    this.resource = resource;
    this.basePath = "/api";
    this.api = api;
  }

  getUrl(id = "") {
    return `${this.basePath}/${this.resource}/${id}`;
  }

  /**
   *
   * @param {Promise} callback
   * @param {Object} fields
   *
   * @returns {import('./responses').Response}
   */
  async exec(callback, fields = null) {
    try {
      const { data, status } = await callback();
      if (fields) {
        const bag = {};
        Object.keys(fields).forEach((f) => {
          if (data[f]) bag[f] = data[f];
        });
        return success(status, bag);
      }
      return success(status, data);
    } catch (error) {
      throw this.handleErrors(error);
    }
  }

  handleErrors(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return this.failResponseHandler(
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      /**
       * @type { XMLHttpRequest  }
       */
      const requestError = error.request;
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return this.failResponseHandler(
        requestError.status,
        requestError.statusText
      );
    } else {
      console.log("Error", error.message);
      return this.failResponseHandler(null, error.message);
    }
  }

  /**
   *
   * @param {number} status
   * @param {object} data
   * @return {Response}
   */
  failResponseHandler(status, data) {
    switch (status) {
      case 400:
        return badRequest(data);
      case 422:
        return unprocessableEntity(data);
      default:
        return new Response(data, "Error", status);
    }
  }
}

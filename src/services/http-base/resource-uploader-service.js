"use strict";

import { success } from "./responses";
import { default as BaseApiService } from "./base-api-service";

export default class ResourceUploaderService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }

  /**
   * @param {File} file
   */
  async upload(file, configs = {}) {
    const formData = new FormData();
    formData.append(file.name, file);
    return this.exec(async () =>
      this.api.post(this.getUrl(), formData, configs)
    );
  }
  stripTrailingSlash(str) {
    if (str.substr(-1) === "/") {
      return str.substr(0, str.length - 1);
    }
    return str;
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
      const { data: responseData, status } = await callback();

      return success(status, responseData.data[0]);
    } catch (error) {
      throw this.handleErrors(error);
    }
  }
}

import { default as BaseApiService } from "./base-api-service";

export default class ReadOnlyApiService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }

  async fetch(page = 1, limit = 10, extraParams = {}) {
    const params = { page, limit, ...extraParams };
    return this.exec(async () => this.api.get(this.getUrl(), { params }));
  }

  async get(id) {
    return this.exec(async () => this.api.get(this.getUrl(id)));
  }
}

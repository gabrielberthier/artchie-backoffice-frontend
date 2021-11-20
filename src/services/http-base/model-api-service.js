import { default as ReadOnlyApiService } from "./read-only-api-service";

export default class ModelApiService extends ReadOnlyApiService {
  constructor(resource) {
    super(resource);
  }

  async post(data = {}, fields = null) {
    return this.exec(async () => this.api.post(this.getUrl(), data), fields);
  }

  async put(id, data = {}, fields = null) {
    if (!id) throw Error("Id is not provided");
    return this.exec(async () => this.api.put(this.getUrl(id), data), fields);
  }

  async delete(id) {
    if (!id) throw Error("Id is not provided");
    return this.exec(async () => this.api.delete(this.getUrl(id)));
  }
}

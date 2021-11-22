import { default as BaseApiService } from "./base-api-service";

export default class ResourceUploaderService extends BaseApiService {
  constructor(resource) {
    super(resource);
  }

  async upload(file, configs = {}) {
    const formData = new FormData();
    formData.append(file.name, file);
    return this.exec(async () =>
      this.api.post(this.getUrl(), formData, configs)
    );
  }
}

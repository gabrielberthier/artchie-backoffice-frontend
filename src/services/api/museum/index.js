import ModelApiService from "src/services/http-base/model-api-service";

export class MuseumApiService extends ModelApiService {
  constructor() {
    super("museum");
  }
}

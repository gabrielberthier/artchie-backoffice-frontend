import ModelApiService from "src/services/http-base/model-api-service";

export class AppKeyCreatorService extends ModelApiService {
  constructor() {
    super("create-app-key");
  }

  async makeKey(uuid) {
    return super.post({
      uuid
    })
  }
}

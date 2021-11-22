import ResourceUploaderService from "../../http-base/resource-uploader-service";

export class MarkerUploaderService extends ResourceUploaderService {
  constructor(token) {
    super("upload-file");
    this.token = token;
  }

  async uploadMarker(file) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${this.token}`,
      },
      params: {
        prefix: "marker",
      },
    };

    return this.upload(file, config);
  }
}

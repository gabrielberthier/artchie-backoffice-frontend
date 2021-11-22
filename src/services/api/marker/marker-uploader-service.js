import ResourceUploaderService from "../../http-base/resource-uploader-service";

export class MarkerUploaderService extends ResourceUploaderService {
  constructor(token, museumUuid) {
    super("upload-file");
    this.token = token;
    this.museum = museumUuid;
  }

  /**
   *
   * @param {File} file
   * @returns
   */
  async uploadMarker(file) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${this.token}`,
      },
      params: {
        prefix: `${this.museum}/marker`,
      },
    };

    return this.upload(file, config);
  }
}

import ResourceUploaderService from "../../../http-base/resource-uploader-service";

export class PlacementObjectUploaderService extends ResourceUploaderService {
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
  async uploadObject(file) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${this.token}`,
      },
      params: {
        prefix: `${this.museum}/placement`,
      },
    };

    return this.upload(file, config);
  }
}

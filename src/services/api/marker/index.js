import ModelApiService from "src/services/http-base/model-api-service";
import { default as BaseApiService } from "../../http-base/base-api-service";
import { PlacementObjectUploaderService } from "./placement-object/pose-object-uploader-service";
import { MarkerUploaderService } from "./marker-uploader-service";
import { convertIncludedAssetIntoModel } from "src/domain/asset/convert-response-to-asset-model";
import { MarkerModel } from "src/domain/marker/marker-models";

export class MarkerApiService extends ModelApiService {
  constructor() {
    super("marker");
  }

  async fetchByMuseumId(museumId) {
    return this.get(`museum/${museumId}`);
  }
}

export class IncludeMarkerService extends BaseApiService {
  /**
   *
   * @param {MarkerUploaderService} markerUploader
   * @param {PlacementObjectUploaderService} placementObjectUploader
   */
  constructor(markerUploader, placementObjectUploader) {
    super("marker");
    this.markerUploader = markerUploader;
    this.placementObjectUploader = placementObjectUploader;
  }

  /**
   * @param {Number} museumId
   * @param {MarkerModel} data
   * @param {File} markerFile
   * @param {File} placementObjectFile
   *
   * @returns {Promise<Response>}
   */
  async post(museumId, data, markerFile, placementObjectFile) {
    try {
      const returnFiles = await Promise.all([
        this.markerUploader.uploadMarker(markerFile),
        this.placementObjectUploader.uploadObject(placementObjectFile),
      ]);

      if (Array.isArray(returnFiles)) {
        const [markerAsset, posedObjectAsset] = returnFiles;

        const { pose_object, ...marker } = data;
        pose_object.asset = convertIncludedAssetIntoModel(
          posedObjectAsset.data
        );
        marker.asset = convertIncludedAssetIntoModel(markerAsset.data);

        return this.exec(async () =>
          this.api.post(this.getUrl(), {
            museum_id: museumId,
            marker,
            pose_object,
          })
        );
      }
    } catch (error) {
      throw this.handleErrors(error);
    }
  }
}

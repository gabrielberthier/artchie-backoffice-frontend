import { Asset, MarkerModel } from "src/components/Forms/Assets/models";
import ModelApiService from "src/services/http-base/model-api-service";
import { default as BaseApiService } from "../../http-base/base-api-service";
import { PlacementObjectUploaderService } from "./placement-object/pose-object-uploader-service";
import { MarkerUploaderService } from "./marker-uploader-service";

export class MarkerApiService extends ModelApiService {
  constructor() {
    super("marker");
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
        pose_object.asset = this.convertAssetToModel(posedObjectAsset.data);
        marker.asset = this.convertAssetToModel(markerAsset.data);

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

  convertAssetToModel(asset) {
    const name = asset.fileName.split("/")[1];
    return new Asset(
      name,
      asset.mimeType,
      asset.fileName,
      asset.URL,
      asset.originalName
    );
  }
}

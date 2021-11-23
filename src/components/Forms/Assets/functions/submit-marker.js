import { IncludeMarkerService } from "src/services/api/marker";
import { MarkerUploaderService } from "src/services/api/marker/marker-uploader-service";
import { PlacementObjectUploaderService } from "src/services/api/marker/placement-object/pose-object-uploader-service";

export const submitMarkerUseCase = async (
  token,
  uuid,
  museumId,
  data,
  markerFile,
  placementObjectFile
) => {
  if (!markerFile || !placementObjectFile) {
    return;
  }
  const serviceMarkerUploader = new MarkerUploaderService(token, uuid);
  const servicePlacementObjectUploader = new PlacementObjectUploaderService(
    token,
    uuid
  );
  const service = new IncludeMarkerService(
    serviceMarkerUploader,
    servicePlacementObjectUploader
  );

  return service.post(museumId, data, markerFile, placementObjectFile);
};

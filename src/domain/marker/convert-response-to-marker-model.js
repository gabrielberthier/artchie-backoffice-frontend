import { convertAssetToModel } from "../asset/convert-response-to-asset-model";
import { PoseObject } from "../pose-object/pose-object-model";
import { MarkerModel } from "./marker-models";

export const convertResponseToModelMarker = (response) => {
  const {
    name,
    dataInfo: { text, title },
    asset,
    resources,
  } = response;
  const { name: poseObjectName, asset: posedObjectAsset } = resources[0];

  const model = new MarkerModel(
    name,
    text,
    title,
    new PoseObject(poseObjectName, convertAssetToModel(posedObjectAsset)),
    convertAssetToModel(asset)
  );

  return model;
};

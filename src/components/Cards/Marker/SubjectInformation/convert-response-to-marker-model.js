import {
  Asset,
  MarkerModel,
  PoseObject,
} from "src/components/Forms/Assets/models";
import mimeType from "mime-types";

export const convertAssetToModel = (asset) => {
  const name = asset.fileName;
  console.log(name);
  let type = asset.mimeType ?? mimeType.lookup(name);
  type = type ? type : "text/plain";
  return new Asset(
    name,
    type,
    asset.path,
    asset.URL,
    asset.originalName,
    asset.temporary_location
  );
};

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

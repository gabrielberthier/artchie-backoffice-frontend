import { Asset } from "./asset-models";
import mimeType from "mime-types";

export const convertAssetToModel = (asset) => {
  const name = asset.fileName;
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

export const convertIncludedAssetIntoModel = (asset) => {
  const name = asset.fileName.split("/")[1];
  console.log(name);
  let type = asset.mimeType ?? mimeType.lookup(name);
  type = type ? type : "text/plain";
  return new Asset(name, type, asset.fileName, asset.URL, asset.originalName);
};

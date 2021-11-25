import { MarkerModel } from "./marker-models";
import { PoseObject } from "../pose-object/pose-object-model";

export const makeMarkerModel = () =>
  new MarkerModel("", "", "", new PoseObject("", null), null);

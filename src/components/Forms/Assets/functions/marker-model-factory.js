import { MarkerModel, PoseObject } from "../models";

export const makeMarkerModel = () =>
  new MarkerModel("", "", "", new PoseObject("", null), null);

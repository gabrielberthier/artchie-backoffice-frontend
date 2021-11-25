export class MarkerModel {
  constructor(marker_name, marker_text, marker_title, posedObject, asset) {
    this.marker_name = marker_name;
    this.marker_text = marker_text;
    this.marker_title = marker_title;
    this.pose_object = posedObject;
    this.asset = asset;
  }
}

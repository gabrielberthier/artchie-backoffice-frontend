export class Asset {
  constructor(
    filename,
    mediaType,
    path,
    url,
    original_name,
    temporary_location = null
  ) {
    this.file_name = filename;
    this.media_type = mediaType;
    this.path = path;
    this.url = url;
    this.original_name = original_name;
    this.temporary_location = temporary_location;
  }
}

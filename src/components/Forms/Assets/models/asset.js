export class Asset {
  constructor(filename, mediaType, path, url, original_name) {
    this.file_name = filename;
    this.media_type = mediaType;
    this.path = path;
    this.url = url;
    this.original_name = original_name;
  }
}

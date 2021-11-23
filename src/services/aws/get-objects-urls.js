import { s3 } from ".";

export function listObjectUrls(uuid) {
  const response = s3.listObjects(
    { Delimiter: `${uuid}/` },
    function (err, data) {
      if (err) {
        return alert("There was an error viewing your album: " + err.message);
      }
      // 'this' references the AWS.Request instance that represents the response
      const href = this.request.httpRequest.endpoint.href;
      const bucketUrl = href;

      const mapped = data.Contents.map((photo) => {
        const photoKey = photo.Key;
        return bucketUrl + encodeURIComponent(photoKey);
      });
    }
  );
}

export const createPresignedUrl = (path) => {
  const s3bucket = new AWS.S3({
    accessKeyId: process.env.VUE_APP_S3_ACCESS_KEY,
    secretAccessKey: process.env.VUE_APP_S3_SECRET_KEY,
    Bucket: process.env.AWS_BUCKET,
  });
  const url = s3bucket.getSignedUrl("getObject", {
    Bucket: process.env.AWS_BUCKET,
    Key: `thumb-${path}`,
    Expires: 300,
  });

  return url;
};

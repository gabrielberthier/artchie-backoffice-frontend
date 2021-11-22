import { s3 } from ".";

export function listObjectUrls() {
  const response = s3.listObjects({ Delimiter: "/" }, function (err, data) {
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

    console.log(mapped);
  });

  console.log(response);
}

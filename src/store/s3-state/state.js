export default function () {
  return {
    accesKey: process.env.VUE_APP_S3_ACCESS_KEY || "",
    secretKey: process.env.VUE_APP_S3_SECRET_KEY || "",
  };
}

export default function () {
  return {
    key: process.env.VUE_APP_S3_SECRET || "",
  };
}

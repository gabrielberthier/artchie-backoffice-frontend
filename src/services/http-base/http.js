import axios from "axios";

const baseURL = "https://artchie-back-end.herokuapp.com/";

export const client = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export const fileUpload = async (
  url = "api/upload-file",
  token,
  file,
  configs = {}
) => {
  const client = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  const formData = new FormData();
  formData.append(file.name, file);

  return client.post(url, formData, configs);
};
